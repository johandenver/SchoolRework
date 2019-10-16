var mysql = require("mysql");
var inquirer = require("inquirer");

var connection  = mysql.createConnection({
    host: "localhost",
    
    port: 3306,

    user: "root",

    password: "password",
    database: "top_songsDB"
});

connection.connect(function(err){
    if (err) throw err;
    console.log("connectec as id " + connection.threadId);
    // afterConnection();
    runSearch();
});

function runSearch(){
    inquirer.prompt({
        name: "action", 
        type: "list",
        message: "what would you like to do?",
        choices: [
            "find songs by artist", 
            "find all artists who appear multiple times",
            "find data within a specific range",
            "search for a specific song",
            "exit"
        ]
    })
    .then(function(answer){
        switch (answer.action) {
            case "find songs by artist":
                artistSearch();
                break;
            case "find all artists who appear multiple times":
                searchMultipleArtist();
                break;
            case "find data within a specific range":
                searchRange();
                break;
            case "search for a specific song":
                searchSong();
                break;
            case "exit":
                connection.end();
                break;
        }
    })
}


function artistSearch(){
    connection.query("SELECT * FROM top5000", function(err, data) {
        if (err) throw err;
        
        for (let i = 0; i < data.length; i++) {
        console.log(
            "\n------------------",
            "\nArtist: " + data[i].artist,
            "\nAlbum: " + data[i].song,
            "\nYear: " + data[i].year,
            "\n------------------"
            )  
        connection.end();  
        }
    });
}

function searchMultipleArtist(){
    connection.query("SELECT artist FROM top5000 GROUP BY artist HAVING COUNT(*) > 1", function(err, data) {
        if (err) throw err;
        for (let i = 0; i < data.length; i++) {
            console.log(
                "\n------------------",
                "\nArtist: " + data[i].artist,
                "\n------------------"
                );  
        }
        runSearch(); 
    })
};

function searchRange(){

};

function searchSong(){

};
