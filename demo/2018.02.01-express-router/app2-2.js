var express = require('express');
var app = express();

app.get('/user/:id', function (req, res, next) {
  // if the user ID is 0, skip to the next route
  if (req.params.id === '0') next('route')
  // otherwise pass the control to the next middleware function in this stack
  else next()
})

app.get('/user/:id', function (req, res, next) {
  // render a regular page
  res.end('regular')
})

// handler for the /user/:id path, which renders a special page
app.get('/user/:id', function (req, res, next) {
  res.end('special')
})

app.listen(3000)