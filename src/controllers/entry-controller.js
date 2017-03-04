import mongoose from 'mongoose'
import Entry from '../models/entry'
import Metric from '../models/metric'
import User from '../models/user'


module.exports = {
  // supply metric _id and entry properties assign an entry to a metric
  create(req, res, next) {
    console.log('im adding an entry')
    const entryProps = req.body
    let entry = new Entry({ value: entryProps.value, entry_date: entryProps.entry_date })

    if (!entryProps.metric) res.send('Metric required')

    // Metric.findOne({ _id: entryProps.metric })
    // .then((metric) => {
    //   console.log(metric)
      // metric.entries.push(entry)
      // use find by id and update  User.findByIdAndUpdate(joe._id, {name: 'Alex'})    Users.findOneAndUpdate({name: req.user.name}, {$push: {friends: friend}});
      Promise.all([Metric.findByIdAndUpdate({ _id: entryProps.metric}, { $push: { entries: entry }}), entry.save()])
        .then(() => {
          Metric.findOne({ _id: entryProps.metric })
            .populate('entries')
            .then(() => {
              res.send('done')
            })
        })
    // })
  }
}
