const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const models = require('../models');
const {db} = models;
const apiRouter = require('./api');
// const client = require('../client/index.js');
// const {Place} = models;
// const {Hotel} = models;
// const {Activity} = models;
// const {Restaurant} = models;


app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, '../public')));


app.use('/api', apiRouter);



// catch 404 (i.e., no route was hit) and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// handle all errors (anything passed into `next()`)
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  console.error(err);
  res.send("Something went wrong: " + err.message);
});




// listen on a port

db.sync()
  .then(function() {
    app.listen(3000, function() {
      console.log("The server is listening closely on port", 3000);
      console.log("Synchronated the database");
    })
  })
  .catch(function(err) {
    console.error("Trouble right here in River City", err, err.stack);
  });