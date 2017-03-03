// import controllers
import UsersController from '../controllers/users-controller'
// import React from 'react'
// import { Route, IndexRoute } from 'react-router'

// import App from '../client/components/app'

module.exports = (app) => {
  // back end routes
  app.post('/api/users', UsersController.create)
  app.get('/api', UsersController.greeting)

}
