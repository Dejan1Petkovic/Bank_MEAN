const express = require('express');
const mongojs = require('mongojs');
var ObjectId = mongojs.ObjectId;
const bodyParser = require('body-parser');
const db = mongojs('bank',['users']);

const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(express.static(__dirname + "/public"));



app.get('/api',function (req,res) {
  db.users.find({},function (err,docs) {
    if(err){throw err}
    res.send(docs);
  })
})

app.post('/insert',function (req,res) {
  var name = req.body.name;
  var deposit = req.body.deposit;
  var cCard = req.body.cCard;
  db.users.insert({name:name,deposit:deposit,cCard:cCard},function (err,docs) {
    if (err) {throw err}
    db.users.find({},function (err,docs) {
      res.send(docs);
    })
  })
})

app.post('/delete',function (req,res) {
  var id = req.body.id;
  db.users.remove({_id:ObjectId(id)},function (err,docs) {
    if(err){throw err}
    res.send(docs);
  })
})



app.post('/getOne',function (req,res) {
  var id = req.body.id;
  db.users.findOne({_id:ObjectId(id)},function (err,docs) {
    if(err){throw err}
    res.send(docs);
    console.log(docs);
  })
})


app.post('/editDb',function (req,res) {
  var id = req.body._id;
  var name = req.body.name;
  var deposit = req.body.deposit;
  var cCard = req.body.cCard;
  console.log(id,name,deposit,cCard);
  db.users.update({_id:ObjectId(id)},{name:name,deposit:deposit,cCard:cCard},function (err,docs) {
    if(err){throw err}
    db.users.find({},function (err,docs) {
      res.send(docs);
    })
  })
})







app.listen(3000,function () {
  console.log('server is working...');
});
