// import controllers
import UsersController from '../controllers/users-controller'

module.exports = (app) => {
  app.post('/api/users', UsersController.create)
  // app.get('/api', DriversController.greeting);
  // app.post('/api/drivers', DriversController.create);
  // app.put('/api/drivers/:id', DriversController.edit);  // :id is a wildcard
  // app.delete('/api/drivers/:id', DriversController.delete);
  // app.get('/api/drivers', DriversController.index);
}
