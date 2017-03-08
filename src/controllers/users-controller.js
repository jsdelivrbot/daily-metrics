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
      .then((user) => {
        // build object that doesn't include password
        let returnObj = {
          _id: user._id,
          email: user.email
          }
        if (user.first_name) retunObj.first_name = user.first_name
        if (user.last_name) returObj.last_name = user.last_name
        res.send(returnObj)
      })
      .catch(next)
  }
}
