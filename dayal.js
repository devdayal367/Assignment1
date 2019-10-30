var express = require('express');
var app = express();
var bodyParser=require("body-parser"); 
const mongoose = require('mongoose'); 
mongoose.connect('mongodb://localhost:27017/dayal'); 
var db=mongoose.connection; 
db.on('error', console.log.bind(console, "Connection failed!")); 
app.use(bodyParser.json()); 
app.use(express.static('public')); 
app.use(bodyParser.urlencoded({ 
    extended: true
}));
app.set('view engine', 'ejs');
app.get('/', function(req, res) {
    res.render('home');
});
app.listen(5255);
app.post('/', function(req,res){ 
  var name = req.body.name;
  var email= req.body.email;
  var phone=req.body.phone;
  var regno=req.body.regno; 
  var write={"name": name,"email":email,"phone":phone,"regno":regno}
app.get('/details', function(req, res) {
  db.collection("web").find({}).toArray(function(err, result) {
    if (err) throw err;
    res.render('details',{result:result});
    db.close;
});});

  db.collection('web').insertOne(write,function(err, collection){ 
    if (err) throw err; 
    console.log("Inserted!"); 
    db.close;
});});
