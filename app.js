const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const lessMiddleware = require('less-middleware');
const logger = require('morgan');

//commenting DB connection out since we aren't using it for now. Taking map from a file for now.
//require('./app_api/models/db');

//commented out since Angular SPA is being used
//const indexRouter = require('./app_server/routes/index');

const apiRouter = require('./app_api/routes/index');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(lessMiddleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

//Use Angular app for front-end
app.use(express.static(path.join(__dirname, 'app_public', 'angularBuild')));

//Allow CORS for testing the Angular app using ng serve if not in production mode
if(process.env.NODE_ENV !== 'production'){
  app.use('/api', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
  app.use('/api/nodes', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
}
//commented out since Angular SPA is being used
//app.use('/', indexRouter);

app.use('/api/', apiRouter);

//use regex to match urls other than base url and send the request to Angular SPA itself
app.get(/(\/about)/, function(req, res, next) {
  res.sendFile(path.join(__dirname, 'app_public', 'angularBuild', 'index.html'));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
