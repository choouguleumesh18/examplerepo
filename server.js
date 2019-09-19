var http = require('http');
var express=require('express');
var app = express();
var request = require('request');

var server = http.createServer(function(){
    console.log("Node server Started")
    //res.writeHead(200,{"Content-Type": "text/plain"});
    //res.end("Hello\n");
});

app.get('/', function(req,response){
    var sql = require('mysql');
    var localTutor = require('./NodeTutorial.js');
    var tut = new localTutor.NodeTutorial();  // Create and save object
    //tut.pTutor()
    //console.log(add.AddNumber(1,2));
    var con = sql.createConnection({
        host:'localhost',
        user:'root',
        password:'root',
        database:'example'
    });
    con.query("select * from user", function(req,res){
        //console.log(res);
        response.send(res);
    });
});

// request("https://www.google.com/", function(err, res, body){
//     console.log(body);
// });

app.post('/addUser',function(res, req){
    var sql = require('mysql');
    var con = sql.createConnection({
        host:'localhost',
        user:'root',
        password:'root',
        database:'example'
    });
    con.query("select * from user", function(req,res){
        console.log(res);
    });
});

app.listen(5000);