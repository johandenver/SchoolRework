var connection = require("./connection.js");

var orm = {
    select: function(tableInput, colToSearch) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput, colToSearch], function(err, result){
            if (err) throw err;
            console.log(result);
        });
    },
    selectWhereVal: function(tableInput, colToSearch, valOfCol) {
        var queryString = "SELECT * FROM ?? WHERE ?? = ?";
        connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result){
            if (err) throw err;
            console.log(result);
        });
    },
    selectAndJoin: function(whatToSelect, tableOne, tableTwo, onTableOneCol, onTableTwoCo){
        var queryString = "SELECT ?? FROM ?? AS tOne";
        queryString += " LEFT JOIN ?? AS tTwo";
        queryString += " on tOne.?? =tTwo";
        connection.query(querystring, [whatToSelect, tableOne, tableTwo, onTableOneCol, onTableTwoCo],
            function(err, result) {
                if (err) throw err;
                console.log(result);
            }
        );
    }

};

module.exports = orm;