import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const EntrySchema = new Schema({
  value: String,
  entry_date: Date
});

const Entry = mongoose.model('entry', EntrySchema);

module.exports = Entry;
