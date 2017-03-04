import mongoose from 'mongoose'
import Entry from '../models/entry'
import Metric from '../models/metric'
// import User from '../models/user'


module.exports = {
  // supply metric _id and entry properties assign an entry to a metric
  create(req, res, next) {
    console.log('im adding an entry')
    const entryProps = req.body
    let entry = new Entry({ value: entryProps.value, entry_date: entryProps.entry_date })
    // check that a metric _id exists
    if (!entryProps.metric) res.send('Metric required')
    Promise.all([Metric.findByIdAndUpdate({ _id: entryProps.metric}, { $push: { entries: entry }}), entry.save()])
      .then(() => {
        Metric.findOne({ _id: entryProps.metric })
          .populate('entries')
          .then(() => {
            res.send('done')
          })
      })
      .catch(() => next())
  },
  // supply user _id get list of all metrics relating to that record
  getEntryList(req, res, next) {
    // check that a metric _id exists
    if (!req.body.metric) res.send('Metric required')
    Metric.findOne({ _id: req.body.metric })
    .then((metric) => {
      let entryIds = metric.entries.map( function(item) {
        return new mongoose.Types.ObjectId(item)
      })
      return Entry.find( { _id: {$in: entryIds} })
    })
    .then((entryArr) => {
      res.send(entryArr)
    })
    .catch(() => next())
  }
}
