import User from '../models/user'
import _ from 'underscore'

module.exports = {
  greeting(req, res) {
    res.send({ hi: 'there' })
  },

  // supply new user properties create user record
  create(req, res, next) {
    const userProps = req.body
    User.create(userProps)
      .then(user => res.send(user))
      .catch(next)
  },

  // supply email receive user record
  getUserId(req, res, next) {
    if (!req.body.email) res.send('Need to supply an email')
    User.find({email: req.body.email})
      .then((user) => {
        let returnObj = {
          _id: user[0]._id,
          email: user[0].email
          }
        if (user[0].first_name) returnObj.first_name = user[0].first_name
        if (user[0].last_name) returnObj.last_name = user[0].last_name
        res.send(returnObj)
      })
      .catch(next)
  }
}
