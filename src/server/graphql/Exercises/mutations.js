const Exercises = require("../../models/exercise")

// TODO: Make sure user has permission to update/delete comment

module.exports = {
  Mutation: {
    createExercise: async (_, { exerciseInput }, { userToken }) => {
      try {
        console.log(exerciseInput)
        const exercise = await Exercises.create({
          ...exerciseInput,
          authorId: userToken.id,
          createdAt: new Date(),
          updatedAt: new Date()
        })
        console.log(exercise)
        return exercise
      } catch (e) {
        throw new Error("Error creating exercise: " + e.message)
      }
    },
    deleteExercise: (_, { _id }) => {
      try {
        return Exercises.findByIdAndDelete(_id)
      } catch (e) {
        throw new Error(e.message)
      }
    },
    toggleIsPremium: async (_, { _id }) => {
      try {
        const exercise = await Exercises.findOne(_id)
        const updatedExercise = Exercises.findByIdAndUpdate(_id, {
          isPremium: !exercise.isPremium
        })
        return updatedExercise
      } catch (e) {
        throw new Error(e.message)
      }
    },
    updateExercise: (_, { exerciseInput, id }) => {
      try {
        const exercise = Exercises.findByIdAndUpdate(id, {
          ...exerciseInput,
          updatedAt: new Date()
        })
        return exercise
      } catch (e) {
        throw new Error(e.message)
      }
    }
  }
}
