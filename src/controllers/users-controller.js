import User from '../models/user'
import Metric from '../models/metric'

module.exports = {
  greeting(req, res) {
    res.send({ hi: 'there' })
  },
  create(req, res, next) {
    const userProps = req.body
    User.create(userProps)
      .then(user => res.send(user))
      .catch(next)
  }
}
