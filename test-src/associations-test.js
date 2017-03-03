import assert from 'assert'
import mongoose from 'mongoose'
import User from '../lib/models/user'
import Metric from '../lib/models/metric'
import Entry from '../lib/models/entry'

describe('Associations', () => {
let hamish, metric, entry

  beforeEach((done) => {
    hamish = new User({
      first_name: 'Hamish',
      last_name: 'Smith',
      email: 'test@email.com',
      password: 'testpass'
    })
    metric = new Metric({ title: 'skipping', metric_type: 'boolean' })
    entry = new Entry({ value: 'true', date: new Date() })

    hamish.metrics.push(metric)
    metric.entries.push(entry)

    Promise.all([hamish.save(), metric.save(), entry.save()])
      .then(() => done());
  });

  it('saves a relation between a user and metric', (done) => {
    User.findOne({ email: 'test@email.com' })
      .populate('metrics')
      .then((user) => {
        assert(user.metrics[0].title === 'skipping')
        done()
      })
  })

  it('saves a full relation graph', (done) => {
    User.findOne({ email: 'test@email.com' })
      .populate({
        path: 'metrics',
        populate: {
          path: 'entries',
          model: 'entry'
        }
      })
      .then((user) => {
        assert(user.first_name === 'Hamish')
        assert(user.metrics[0].title === 'skipping')
        assert(user.metrics[0].entries[0].value === 'true')
        done()
      })
  })
})
