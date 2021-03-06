const mongoose = require('mongoose');

let dbURI = 'mongodb://localhost/wprogindexdb';


//Change URI if app is running in production
console.log(`process.env.NODE_ENV is ${process.env.NODE_ENV}`);
console.log(`process.env.MLAB_URI is ${process.env.MLAB_URI}`);
if(process.env.NODE_ENV === 'production'){
  dbURI = process.env.MLAB_URI; //MLAB URI added
}

mongoose.connect(dbURI, {
  useNewUrlParser: true
});

const readLine = require('readline');
if (process.platform === 'win32') {
  const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.on('SIGINT', () => {
    process.emit("SIGINT");
  });
}

mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to ${dbURI}`);
});

mongoose.connection.on('error', (err) => {
  console.log(`Mongoose connection error: ${err}`);
});

mongoose.connection.on('disconnected', () => {
  console.log(`Mongoose connection disconnected`);
});

//Graceful shutdown function to for closing Mongoose connection
const gracefulShutdown = (msg, callback) => {
  mongoose.connection.close(() => {
    console.log(`Mongoose disconnected through ${msg}`);
    callback();
  });
};

// For nodemon restarts
process.once('SIGUSR2', () => {
  gracefulShutdown('nodemon restart', () => {
    process.kill(process.pid, 'SIGUSR2');
  });
});
// For app termination
process.on('SIGINT', () => {
  gracefulShutdown('app termination', () => {
    process.exit(0);
  });
});
// For Heroku app termination
process.on('SIGTERM', () => {
  gracefulShutdown('Heroku app shutdown', () => {
    process.exit(0);
  });
});


require('./resources');

//Tst hangasdasdse
