var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var multer = require('multer');
var uploadSetting = multer({dest:"./uploads"});
var fs = require('fs');

var index = require('./routes/index');
var about = require('./routes/about');
var contents = require('./routes/contents');
var resume = require('./routes/resume');
var editor = require('./routes/editor');
var upload = require('./routes/upload');
var post = require('./routes/post');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());


//경로가 앞에 추가될 경우 public path 추가 해줘야 됨
app.use(express.static(path.join(__dirname, 'public/')));
app.use('/post', express.static(path.join(__dirname, 'public/')));
app.use('/contents', express.static(path.join(__dirname, 'public/')));

app.use('/', index);
app.use('/home', index);
app.use('/about', about);
app.use('/resume', resume);
app.use('/contents', contents);
app.use('/contents/editor', editor);
app.use('/post', post);
app.use('/upload', upload);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // setnotice board locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
