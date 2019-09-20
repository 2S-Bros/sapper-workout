const roleDAO = require('../../models/role');

module.exports = {
  Query: {
    roles() {
      const roles = roleDAO.find().exec();
      if (!roles) {
        throw new Error('Error');
      }
      return roles;
    },
    user(obj, args) {
      const myRole = roleDAO.findOne({ name: { $eq: args.name } });
      if (!myRole) {
        throw new Error('Error');
      }
      return myRole;
    },
  },
};
