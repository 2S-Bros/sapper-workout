const mongoose = require('mongoose');

const db = () => {
  mongoose.Promise = global.Promise;
  const db = mongoose.connect(process.env.DB_URL, {
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true,
  });
  mongoose.connection
    .on('error', () => {
      console.log('Error: Could not connect to MongoDB.');
    })
    .on('open', () => {
      console.log('Connected to MongoDB');
    });
  return db;
};

module.exports = { db }