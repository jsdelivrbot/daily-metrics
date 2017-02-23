import mongoose from 'mongoose'
const Schema = mongoose.Schema;


const UserSchema = new Schema({
  name: {
    type: String,
    validate: {
      validator: (name) => name.length > 2,
      message: 'Name must be longer than 2 characters.'
    },
    required: [true, 'Name is required.']
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

  Metric.remove({ _id: { $in: this.blogPosts } })
    .then(() => next());

});


const User = mongoose.model('user', UserSchema);

module.exports = User;  // common to only export model/class
