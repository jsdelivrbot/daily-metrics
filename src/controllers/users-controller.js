import User from '../models/user'

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
      .then((user) => res.send(user))
      .catch(next)
  }
}
