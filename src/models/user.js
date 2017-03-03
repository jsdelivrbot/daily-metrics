import mongoose from 'mongoose'
const Schema = mongoose.Schema;


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


const User = mongoose.model('user', UserSchema);

module.exports = User;  // common to only export model/class
