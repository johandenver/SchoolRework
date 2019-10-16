var mysql = require("mysql");

var connection  = mysql.createConnection({
    host: "localhost",
    
    port: 3306,

    user: "root",

    password: "password",
    database: "playlist_db"
});

connection.connect(function(err){
    if (err) throw err;
    console.log("connectec as id " + connection.threadId);
    // afterConnection();
    createSong();
});

function afterConnection() {
    connection.query("SELECT * FROM songs", function(err, res){
        if (err) throw err;
        console.log(res);
        for (let i = 0; i < res.length; i++) {
            if (res[i].genre === "Rock"){
            console.log(res[i].artist + " Rocks out so HARD!!");
            }; 
            if (res[i].genre === "Rap"){
                console.log(res[i].artist + " is king!!")
            };
            if (res[i].genre === "Jazz"){
                console.log(res[i].artist + " is a cool cat!")
            };
        };
        // console.log(res);
        connection.end();
    });
};

function createSong() {
    console.log("Inserting a new song.. \n");
    var query = connection.query(
        "INSERT INTO songs SET ?",
        {
            title: "Rocket Man",
            artist: "Elton John",
            genre: "Soft Rock"
        },
        function(err, res) {
            console.log(res.affectedRows + " new song inserted!\n");

            updateSongData();
        }
    );

    console.log(query.sql);
};

function updateSongData() {
    console.log("updating song genre.../n");
    var query = connection.query(
       "UPDATE songs SET ? WHERE ?",
       [
           {
               genre: "Rock"
           },
           {
               title: "Rocket Man"
           }
       ],
       function(err, res) {
           console.log(res.affectedRows + " song genre updated\n");
           deleteProduct();
       }
    );
    console.log(query.sql);
};

function deleteProduct() {
    console.log("Deleting all U2 songs..\n");
    connection.query(
        "DELETE FROM songs WHERE ?",{
            artist: "U2"
        },
        function(err, res) {
            console.log(res.affectedRows + " is deleted!\n");
            readProducts();
        }
    );
};

function readProducts() {
    console.log("Selecting all products...\n");
    connection.query("SELECT * FROM songs",function(err, res) {
        if (err) throw err;

        console.log(res);
        connection.end();
    });
};


