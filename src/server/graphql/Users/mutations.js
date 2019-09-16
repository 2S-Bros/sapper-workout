const user = require('../../models/user');
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');

exports = {
  Mutation: {
    addCard: (_, args) => {
      try {
        const res = user.findOneAndUpdate(
          { id: { $eq: args.id } },
          { $addToSet: { cards: args.cardId } });
        return res;
      } catch (e) {
        return e.message;
      }
    },
    addDeck: (_, args) => {
      try {
        const res = user.findOneAndUpdate(
          { id: { $eq: args.id } },
          { $addToSet: { decks: args.deckId } });
        return res;
      } catch (e) {
        return e.message;
      }
    },
    addRole: (_, args) => {
      try {
        const res = user.updateOne(
          { _id: { $eq: args._id } },
          { $addToSet: { roles: args.role } }).exec();
        return true;
      } catch (e) {
        return false;
      }
    },
    changePassword: async (_, { oldPass, newPass }, { userId }) => {
      const foundUser = await user.findById(userId);

      if (!foundUser) {
        throw new Error('Authentication error');
      }

      const valid = await bcrypt.compare(oldPass, foundUser.password);

      if (!valid) {
        throw new Error('Incorrect password');
      }

      foundUser.password = bcrypt.hashSync(newPass, 10);
      const status = await foundUser.save();
      return true;
    },
    createUser: async (_, args) => {
      try {
        const userData = args;
        userData.password = bcrypt.hashSync(args.password, 10);
        const res = await user.create(userData);
        return {
          token: jsonwebtoken.sign(
            { id: res._id, username: res.username },
            process.env.JWT_SECRET,
            { expiresIn: '1d' }
          ),
          user: res,
        };
      } catch (e) {
        throw new Error('Error creating account');
      }
    },
    login: async (_, { username, password }) => {
      const foundUser = await user.findOne({ username: { $eq: username } });

      if (!foundUser) {
        throw new Error('Invalid username');
      }

      const valid = await bcrypt.compare(password, foundUser.password);

      if (!valid) {
        throw new Error('Incorrect password');
      }

      return {
        token: jsonwebtoken.sign(
          { id: foundUser._id, username: foundUser.username },
          process.env.JWT_SECRET,
          { expiresIn: '1d' }
        ),
        user: foundUser,
      };
    },
    updateUser: (_, args, { userId }) => {
      try {
        const res = user.findOneAndUpdate({ _id: { $eq: userId } }, args);
        return res;
      } catch (e) {
        throw new Error(e.message);
      }
    },
  },
};
