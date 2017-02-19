// import controllers
const Test = require('../controllers/test-controller');

module.exports = (app) => {
  app.get('/', Test.greeting)
  // app.get('/api', DriversController.greeting);
  // app.post('/api/drivers', DriversController.create);
  // app.put('/api/drivers/:id', DriversController.edit);  // :id is a wildcard
  // app.delete('/api/drivers/:id', DriversController.delete);
  // app.get('/api/drivers', DriversController.index);
}
