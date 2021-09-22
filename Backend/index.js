var express = require('express');
var path = require('path');
var exphbs  = require('express-handlebars');
const port = 5000;
var bodyParser=require('body-parser');
const session = require('express-session');
var app = express();
app.use(express.urlencoded({extended:true}))
app.use(session({secret: 'ssshhhhh',resave:false,saveUninitialized:true,cookie:{maxAge:9000000}}));
app.use(bodyParser.json())
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use('/',require(path.join(__dirname,'routes/routing')))


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})