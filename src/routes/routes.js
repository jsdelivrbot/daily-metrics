// import controllers
// const DriversController = require('../controllers/drivers_controller');

module.exports = (app) => {
  app.get('/', greeting
  // app.get('/api', DriversController.greeting);
  // app.post('/api/drivers', DriversController.create);
  // app.put('/api/drivers/:id', DriversController.edit);  // :id is a wildcard
  // app.delete('/api/drivers/:id', DriversController.delete);
  // app.get('/api/drivers', DriversController.index);
};

greeting(req, res) {
  res.send({ hi: 'there' });
},
