import mongoose from 'mongoose'
import bcrypt from 'bcrypt-nodejs'
const Schema = mongoose.Schema


const UserSchema = new Schema({
  first_name: String,
  last_name: String,
  email: {
    type: String,
    unique: true,
    lowercase: true,
    // validate: {
    //   validator: (email) => // email validation
    //   message: 'Incorrect email form.'
    // },
    required: [true, 'Email is required']
  },
  password: {
    type: String,
    required: true,
    validate: {
      validator: (password) => password.length > 7,
      message: 'Password must be at least 8 characters.'
    }
  },
  metrics: [{
    type: Schema.Types.ObjectId,
    ref: 'metric'
  }]

})

// middleware for removing a record
UserSchema.pre('remove', function (next) {
  // this === model instance (i.e name of metric in code)
  const Metric = mongoose.model('metric');

  Metric.remove({ _id: { $in: this.metrics } })
    .then(() => next());

});


// On Save Hook, encrypt password
// Before saving a model, run this function
UserSchema.pre('save', function(next) {
  // get access to the user model
  const user = this;

  // generate a salt then run callback
  bcrypt.genSalt(10, function(err, salt) {
    if (err) { return next(err); }

    // hash (encrypt) our password using the salt
    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) { return next(err); }

      // overwrite plain text password with encrypted password
      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.comparePassword = function(candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) { return callback(err); }

    callback(null, isMatch);
  });
}





const User = mongoose.model('user', UserSchema);

module.exports = User;  // common to only export model/class
