var express = require('express'); 
var app = express();
const mongoose= require('mongoose');
app.set('view engine', 'ejs');
const port = 3002;
// Bring in the Database Config and connect with the database
const mongoURI = require('./config/keys').mongoURI;
mongoose.connect(mongoURI, {
    useNewUrlParser: true
}).then(() => {
    console.log(`Database connected successfully ${mongoURI}`)
}).catch(err => {
    console.log(`Unable to connect with the database ${err}`)
});
const postRoute = require('./routes/postRoute.js');
const index = require('./routes/index');
app.use('/post', postRoute);
app.use('/', index);

app.use('/public',express.static("public"));
app.listen(port, function () {
  console.log(`Server running at port ${port}`)
})

