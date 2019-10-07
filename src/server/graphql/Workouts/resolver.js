const Workouts = require("../../models/workout")

module.exports = {
  Query: {
    workout: (obj, { _id }) => {
      const workout = Workouts.findOne({ _id })
      if (!workout) throw new Error("Workout no longer exists")
      return workout
    },
    workouts: (obj, { limit = 0 }) => {
      const workouts = Workouts.find({}, null, {
        limit,
        sort: {
          updatedAt: -1
        }
      }).exec()
      if (!workouts) throw new Error("Error retrieving workouts")
      return workouts
    }
  }
}
