import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const MetricSchema = new Schema({
  title: String,
  metric_type: {
    type: String,
    required: true
  },
  entries: [{
    type: Schema.Types.ObjectId,
    ref: 'entry'
  }]

});

const Metric = mongoose.model('metric', MetricSchema);

module.exports = Metric;
