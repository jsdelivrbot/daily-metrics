// import controllers
import UsersController from '../controllers/users-controller'
import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from '../client/components/app'

module.exports = (app) => {
  // back end routes
  app.post('/api/users', UsersController.create)
  // app.get('/api', DriversController.greeting);
  // app.post('/api/drivers', DriversController.create);
  // app.put('/api/drivers/:id', DriversController.edit);  // :id is a wildcard
  // app.delete('/api/drivers/:id', DriversController.delete);
  // app.get('/api/drivers', DriversController.index);


  // front end routes
  <Route path="/" component={App}>
    <IndexRoute component={UsersIndex} />
    <Route path="/users/new" component={UsersNew} />
  </Route>
}
