// import controllers
import passport from 'passport'
import UsersController from '../controllers/users-controller'
import Authentication from '../controllers/auth-controller'
import passportService from '../services/passport'

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = (app) => {
  // back end routes
  app.post('/api/users', UsersController.create)
  app.get('/api', UsersController.greeting)
  app.get('/', requireAuth, function(req, res) {
    res.send({ message: 'Super secret code is ABC123' })
  })
  app.post('/signin', requireSignin, Authentication.signin)
  app.post('/signup', Authentication.signup)

}







// module.exports = function(app) {
//   app.get('/', requireAuth, function(req, res) {
//     res.send({ message: 'Super secret code is ABC123' });
//   });
//   app.post('/signin', requireSignin, Authentication.signin);
//   app.post('/signup', Authentication.signup);
