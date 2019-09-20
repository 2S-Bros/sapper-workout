const Exercises = require('../../models/exercise');

module.exports = {
  Query: {
    exercise: (obj, { _id }) => {
      const exercise = Exercises.findOne({ _id });
      if (!exercise) throw new Error('Exercise no longer exists');
      return exercise;
    },
    exercises: (obj, { limit = 0 }) => {
      const exercises = Exercises.find(
        {},
        null,
        {
          limit,
          sort: {
            updatedAt: -1,
          },
        }
      ).exec();
      if (!exercises) throw new Error('Error retrieving exercises');
      return exercises;
    },
  },
};
