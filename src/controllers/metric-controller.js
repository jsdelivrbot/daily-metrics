import mongoose from 'mongoose'
import Metric from '../models/metric'
import User from '../models/user'

mongoose.Promise = global.Promise

module.exports = {
  // supply metric properties and a user _id and create a metric assigned to a user
  create(req, res, next) {
    const metricProps = req.body
    let metric = new Metric({ title: metricProps.title, metric_type: metricProps.metric_type})

    if (!metricProps.user) res.send('User required')

    User.findOne({ _id: metricProps.user })
    .then((user) => {
      // user.metrics.push(metric)
      Promise.all([User.findByIdAndUpdate({ _id: metricProps.user }, {$push: {metrics: metric}}), metric.save()])  // use find byId and update
        .then(() => {
          User.findOne({ _id: metricProps.user })
            .populate('metrics')
            .then(() => {
              res.send('done')
            })
        })
    })
    .catch(next)
  },
  // supply user _id get list of all metrics relating to that record
  getList(req, res, next) {
    if (!req.body.user) res.send('User required')
    User.findOne({ _id: req.body.user })
    .then((user) => {
      let metricIds = user.metrics.map( function(item) {
        return new mongoose.Types.ObjectId(item)
      })
      return Metric.find( { _id: {$in: metricIds} })
    })
    .then((metricArr) => {
      res.send(metricArr)
    })
    .catch(next)
  }
}
