const userDAO = require('../../models/user');

module.exports = {
  Query: {
    users() {
      const users = userDAO.find().exec();
      if (!users) {
        throw new Error('Error');
      }
      return users;
    },
    user(obj, args) {
      const myUser = userDAO.findOne({ username: { $eq: args.username } });
      if (!myUser) {
        throw new Error('Error');
      }
      return myUser;
    },
    me(_, args, { userId }) {
      if (!userId) {
        throw new Error("You are not authenticated");
      }

      return userDAO.findById(userId);
    }
  },
};
