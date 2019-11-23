var express = require('express')
var app = express()
app.set('view engine', 'ejs')
var index = require('./routes/index');
var initDb = require('./mongoUtil').initDb;
initDb(function (err) {
  app.listen(port, function (err) {
      if (err) {
          throw err; //
      }
      console.log("API Up and running on port " + port);
  });
});
app.use('/', index)
app.listen(3000, function () {
  console.log('Server running at port 3000: http://127.0.0.1:3000')
})

