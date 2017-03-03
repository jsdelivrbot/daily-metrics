// imports
import express from 'express'
import bodyParser from 'body-parser'
import routes from './routes/routes'
import mongoose from 'mongoose'
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import { Router, browserHistory } from 'react-router';
// import clientRoutes from './client/routes';
// import reducers from './client/reducers';
// import promise from 'redux-promise';

// init
const app = express();
const dbConnection = 'mongodb://localhost/daily-records'  // TODO: pull from environment

// connect to mongo
mongoose.Promise = global.Promise
if (process.env.NODE_ENV !== 'test') {
    mongoose.connect(dbConnection);
}

// run app and routes through middleware
app.use(bodyParser.json());  // must be in this order
routes(app);

// handle errors in requests
app.use((err, req, res, next) => {
  res.status(422).send({ error: err.message });

});

// exports
module.exports = app;

// front end
