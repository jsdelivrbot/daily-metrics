import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const EntrySchema = new Schema({
  content: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  }
});

const Entry = mongoose.model('entry', EntrySchema);

module.exports = Entry;
