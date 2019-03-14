const mongoose = require('mongoose');
const dbConfig = require('../config/dbConfig.json');
const uri = `mongodb+srv://${dbConfig.name}:${dbConfig.password}@cluster0-lhjmc.gcp.mongodb.net/loftSystem?retryWrites=true`;

mongoose.Promise = global.Promise;

mongoose.connect(uri, {
  useNewUrlParser: true,
});

mongoose.connection.on('connected', () => {
  console.log(
    'Mongoose connection open mongodb://root:567234@ds121965.mlab.com:21965/it651'
  );
});

mongoose.connection.on('error', err => {
  console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Mongoose connection disconnected app termination');
    process.exit(0);
  });
});
