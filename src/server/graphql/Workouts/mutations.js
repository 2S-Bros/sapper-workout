const Workouts = require("../../models/workout")

// TODO: Make sure user has permission to update/delete comment

module.exports = {
  Mutation: {
    createWorkout: async (obj, { workoutInput }, { userToken }) => {
      try {
        console.log(workoutInput)
        const workout = await Workouts.create({
          ...workoutInput,
          authorId: userToken.id,
          createdAt: new Date(),
          updatedAt: new Date()
        })
        console.log(workout)
        return workout
      } catch (e) {
        throw new Error("Error creating workout: " + e.message)
      }
    },
    deleteWorkout: (obj, { _id }) => {
      try {
        return Workouts.findByIdAndDelete(_id)
      } catch (e) {
        throw new Error(e.message)
      }
    },
    toggleIsPremium: async (obj, { _id }) => {
      try {
        const workout = await Workouts.findOne(_id)
        const updatedWorkout = Workouts.findByIdAndUpdate(_id, {
          isPremium: !workout.isPremium
        })
        return updatedWorkout
      } catch (e) {
        throw new Error(e.message)
      }
    },
    updateWorkout: (obj, { workoutInput, id }) => {
      try {
        const workout = Workouts.findByIdAndUpdate(id, {
          ...workoutInput,
          updatedAt: new Date()
        })
        return workout
      } catch (e) {
        throw new Error(e.message)
      }
    }
  }
}
