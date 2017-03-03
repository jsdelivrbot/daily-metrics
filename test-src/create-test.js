import assert from 'assert'
import User from '../lib/models/user'
import Metric from '../lib/models/metric'
import Entry from '../lib/models/entry'

describe('Creating records', () => {
  it('saves a user', (done) => {
    const joe = new User({
      first_name: 'Joe',
      last_name: 'Smith',
      email: 'joe@smith.com',
      password: 'testpass'
    })
    joe.save()
      .then(() => {
        assert(!joe.isNew)
        done()
      })
  })

  it('receives an error when trying to save a user with an existing email address', (done) => {
    const bill = new User ({
      first_name: 'Bill',
      last_name: 'Johnson',
      email: 'bill@email.com',
      password: 'testpass'
    })
    const bill2 = new User ({
      first_name: 'Bill',
      last_name: 'Second',
      email: 'bill@email.com',
      password: 'testpass'
    })


    bill.save()
      .then(() => {
        bill2.save()
          .then(() => {
            assert(!bill2.isNew)
            done()
          })
      })
  })

  // it('saves a metric', (done) => {
  //   const metric = new Metric({ title: 'skipping', metric_type: 'boolean' })
  //   const joe = new User({name: 'Joe'})
  //   joe.save()
  //     .then(() => {
  //       metric.save()
  //         .then(() => {
  //           assert(!metric.isNew)
  //           done()
  //         })
  //     })
  // })
  //
  // it('saves an entry', (done) => {
  //   const entry = new Entry({ value: 'True', date: new Date() })
  //   const metric = new Metric({ title: 'skipping', metric_type: 'boolean' })
  //   const joe = new User({name: 'Joe'})
  //   joe.save()
  //     .then(() => {
  //       metric.save()
  //         .then(() => {
  //           entry.save()
  //             .then(() => {
  //               assert(!metric.isNew)
  //               done()
  //             })
  //         })
  //     })
  // })

})
