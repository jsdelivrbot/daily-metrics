// import controllers
import passport from 'passport'
import UsersController from '../controllers/users-controller'
import MetricsController from '../controllers/metric-controller'
import EntriesController from '../controllers/entry-controller'
import Authentication from '../controllers/auth-controller'
import passportService from '../services/passport'

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = (app) => {
  // back end routes
  app.get('/api', UsersController.greeting)  // to test API
  app.get('/', requireAuth, function(req, res) {
    res.send({ message: 'Authenticated' })
  })
  app.post('/signin', requireSignin, Authentication.signin)
  app.post('/signup', Authentication.signup)
  app.post('/addmetric', requireAuth, MetricsController.create)
  app.post('/getmetrics', requireAuth, MetricsController.getList)
  app.post('/getuser', UsersController.getUserId)
  app.post('/addentry', requireAuth, EntriesController.create)
  app.post('/getentries', requireAuth, EntriesController.getEntryList)
  app.post('/entryupdate', requireAuth, EntriesController.update)

}
