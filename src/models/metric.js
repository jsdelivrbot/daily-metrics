import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const MetricSchema = new Schema({
  title: String,
  metric_type: String,
  entry: [{
    type: Schema.Types.ObjectId,
    ref: 'entry'
  }]

});

const Metric = mongoose.model('metric', MetricSchema);

module.exports = Metric;
