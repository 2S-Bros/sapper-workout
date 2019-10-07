const mongoose = require("mongoose")
const Schema = mongoose.Schema

const workoutSchema = new Schema({
  authorId: String,
  canEdit: Boolean,
  createdAt: Date,
  description: String,
  intensity: Number,
  isPremium: Boolean,
  categories: [String],
  name: String,
  updatedAt: Date
})

module.exports = mongoose.model("Workout", workoutSchema, "Workout")
