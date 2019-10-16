var express = require("express");

var app = express();

var mysql = require("mysql");

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "wishes_db"
});

connection.connecxt(function(err,){
    if (err) {
        console.log("error connecting: " + err.stack);
        return;
    }

    console.log("connected as id " + connection.threadId);
});

app.get("/", function(req, res){
    connection.query("SELECT * FROM wishes;", function(err, data) {
        if (err) throw err;

        res.render("index", { wishes: data});
    });
});

app.post("/", function(req, res){

    connection.query("INSERT INTO wishes (wishes) VALUES (?)", [req.body.wish], function(err, result){
        if (err) throw err;

        res.redirect("/");
    });
});

app.listen(PORT, function(){
    console.log("Server listening on: http:localhost:" + PORT);
})