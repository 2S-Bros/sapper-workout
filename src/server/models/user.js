const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  cards: [String],
  decks: [String],
  displayName: String,
  password: { type: String, required: true },
  roles: [String],
  username: { type: String, required: true, unique: true },
});

userSchema.index({ username: 1 });

module.exports = mongoose.model('User', userSchema, 'User');
