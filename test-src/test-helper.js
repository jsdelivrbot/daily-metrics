const mongoose = require('mongoose')  // convert to es6

mongoose.Promise = global.Promise;  // mongoose promise library is deprecated

before((done) => {
  // connect to DB before running mocha
  mongoose.connect('mongodb://localhost/daily_records_test');
  mongoose.connection
    .once('open', () => console.log('Connected to test DB'))
    .on('error', (error) => {
      console.warn('Warning', error);
    });
  done();
});


beforeEach ((done) => {
  // drop all collections before each test
  // const { users, comments, blogposts } = mongoose.connection.collections
  // users.drop(() => {
  //   comments.drop(() => {
  //     blogposts.drop(() => {
  //       done();
  //     });
  //   });
  // });
});
