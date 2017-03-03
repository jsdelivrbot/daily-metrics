import User from '../models/user'

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

// module.exports = {
//   greeting(req, res) {
//     res.send({ hi: 'there' });
//   },
//   index(req, res, next) {
//     const { lng, lat } = req.query;
//
//     Driver.geoNear(
//       { type: 'Point', coordinates: [parseFloat(lng), parseFloat(lat)] },
//       { spherical: true, maxDistance: 200000 }
//     )
//       .then(drivers => res.send(drivers))
//       .catch(next);
//   },
//   create(req, res, next) {
//     const driverProps = req.body;
//     Driver.create(driverProps)
//       .then(driver => res.send(driver))  // send driver back to requester
//       .catch(next);
//   },
//   edit(req, res, next) {
//     const driverId = req.params.id;  // req.params.XX == apistring/:XX
//     const driverProps = req.body;
//
//     Driver.findByIdAndUpdate({ _id: driverId }, driverProps)
//       .then(() => Driver.findById({ _id: driverId }))
//       .then(driver => res.send(driver))
//       .catch(next);
//
//   },
//   delete(req, res, next) {
//     const driverId = req.params.id;
//
//     Driver.findByIdAndRemove({ _id: driverId })
//       .then(driver => res.status(204).send(driver))
//       .catch(next);
//   }
// };
