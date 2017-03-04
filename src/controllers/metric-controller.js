import Metric from '../models/metric'
import User from '../models/user'

module.exports = {
  create(req, res, next) {
    const metricProps = req.body
    let metric = new Metric({ title: metricProps.title, metric_type: metricProps.metric_type})
    console.log('metricProps', metricProps)  // TODO: add IS_DEBUG

    if (!metricProps.user) res.send('User required')

    User.findOne({ _id: metricProps.user })
    .then((user) => {
      user.metrics.push(metric)
      Promise.all([user.save(), metric.save()])
        .then(() => {
          User.findOne({ _id: metricProps.user })
            .populate('metrics')
            .then(() => {
              res.send('done')
            })
        })
    })
  },
  getList(req, res, next) {
    res.send('getting list of metrics')
  }
}
