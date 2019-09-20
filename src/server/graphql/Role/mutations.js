const role = require('../../models/role');

module.exports = {
  Mutation: {
    createRole: async (_, args) => {
      try {
        const res = await role.create({ name: args.name });
        return true;
      } catch (e) {
        throw new Error('Error creating account');
      }
    },
  },
};
