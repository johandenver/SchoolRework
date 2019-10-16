var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: "password",
    database: "college_db"
});

connection.connect(function(err){
    if (err) throw err; 
    console.log("connected as id " + connection.threadId + "\n");
    showColleges();
})

function showColleges() {
    console.log("loading colleges.... \n");
    connection.query("SELECT * FROM universities", function(err, data){
    if (err) throw err;
    console.log(data);
    for (let i = 0; i < data.length; i++) {
        console.log(
            "\n------------------",
            "\nName: " + data[i].universities_name,
            "\nLocation: " + data[i].universities_location,
            "\nScore: " + data[i].universities_score,
            "\n------------------"
            )
        
    };
    connection.end();
    });
}