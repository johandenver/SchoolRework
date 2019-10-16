var express = require("express");
var mysql = require("mysql");

var app = express();

var PORT = process.env.PORT || 8080;

var connection = msql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "seinfeld_db"
});

connection.connect(function(err){
    if (err) {
        console.error("error connecting: " +err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
})

app.get("/", function(req, res){
    

})

app.get("/cast", function(req, res){
    var query = "SELECT * FROM actors order by id";
    connection.query(query, function(err, data){
        if (err) throw err;
        console.log(data);
        var html = "<h1> Seinfeld Cast </h1>";

        html += "<ul>";

        for (var i = 0; i < data.length; i++ ) {
            html += "<li><p> Name: " + data[i].name + "<p></li>";
        };

        html += "</ul>";

        res.send(html);
    });
});

app.get("/coolness-chart", function(req, res){
    var query = "SELECT * FROM actors order by ";
    connection.query(query, function(err, data){
        if (err) throw err;
        console.log(data);
        var html = "<h1>Seinfeld Crew by Coolness </h1>";

        html += "<ul>";

        for (let i = 0; i < data.length; i++) {
            html += "<li><p> Name: " + data[i].name + "<p></li>";
            html += "<li><p> Level of Cool: " + data[i].coolness_points + "<p></li>";  
        };

        html += "</h1>";
        
        res.send(html);
    });  
});

app.get("/attitude-chart/:att", function(req, res){
    
    connnection.query("SELECT * FROM actors where attitude = ?", [req.params.att], function(req, res){
    
    if (err) throw err;
    console.log(data);   
    var html = "<h1>It's All About Your Attitude Seinfeld!</h1>";

    html += "<ul>";

        for (let i = 0; i < data.length; i++) {
            html += "<li><p> Name: " + data[i].name + "<p></li>";
            html += "<li><p> Attitude: " + data[i].attitude + "<p></li>";  
        };

        html += "</h1>";
        
        res.send(html);
    })   
})

app.listen(PORT, function(){
    console.log("Server listening on: http://localhost " + PORT);
});