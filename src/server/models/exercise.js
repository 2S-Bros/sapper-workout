const mongoose = require('mongoose')
const Schema = mongoose.Schema

const exerciseSchema = new Schema({
  authorId: String,
  canEdit: Boolean,
  createdAt: Date,
  description: String,
  intensity: Number,
  isPremium: Boolean,
  tags: [String],
  title: String,
  updatedAt: Date,
  // TODO: add workouts
});

exports = mongoose.model('Exercise', exerciseSchema, 'Exercise');
