// dependency for inquirer npm package
var inquirer = require("inquirer");

/*
* Start out by creating a constructor function called "Player" with the following properties and methods...

  * `name`: Property which contains the player's name
  * `position`: Property which holds the player's position
  * `offense`: Property which is a value between 1 and 10 to show how good this player is on offense
  * `defense`: Property which is a value between 1 and 10 to show how good this player is on defense
  * `goodGame`: Method which increases either the player's offense or defense property based upon a coinflip.
  * `badGame`: Method which decreases either the player's offense or defense property based upon a coinflip.
  * `printStats`: Method which prints all of the player's properties to the screen
  * */

// constructor function 
function Player(name, position, offense, defense) {
    this.name = name;
    this.position = position;
    this.offense = offense;
    this.defense = defense;

    this.goodGame = function(){
        var flip = flipCoin();
        if (flip>0){
            if(offense===10){
                return ("Offense is maxed out!");
            }
            offense++;
        } else {
            if(defense==10){
                return ("Defense is maxed out");
            }
            defense++;
        }
    };

    this.badGame = function(){
        var flip = flipCoin();
        if (flip>0){
            if(offense===1){
                return ("Offense is low!");
            }
            offense--;
        } else {
            if(defense===1){
                return ("Defense is low!");
            }
            defense++;
        }

    };

    this.printStats = function(){
        console.log("Name: " + this.name + "\nPosition: " + this.position +
        "\nOffense: " + this.offense + "\nDefense: " + this.defense);
    console.log("---------------");
    };

};


function flipCoin(){
    Math.floor(Math.random()+.5)
};

/*
* Now create a program which allows the user to create 3 unique players; 2 starters and a sub. It should take as user input the name, position, offense, and defense of each player.

* Once all of the players have been created, print their stats.
*/
var starter = [];
var sub = [];
var playerCount = 0;

var createPlayers = function() {
    if (playerCount < 3){
        console.log("\n----------------\n")
        inquirer.prompt([
            {
            name: "name",
            message: "What is your player's name?"  
            }, {
            name: "Position",
            message: "what is your player's position?"
            }, {
            name: "Offense",
            message: "What is your player's offense level?",
            validate: function(value) {
                if (isNaN(value) === false && parseInt(value) >0 && parseInt(value) <= 10){
                    return true;
                }
                return false;
            }
            }, {
            name: "Defense",
            message: "what is your player's defense level?",
            validate: function(value) {
                if (isNaN(value) === false && parseInt(value) >0 && parseInt(value) <= 10){
                    return true;
                }
                return false;
            }
            }
        ]).then.function(answers){
            var player = new Player(
            answers.name,
            answers.position,
            parseInt(answers.offense),
            parseInt()
            )
        }

        count++;

        createPlayers();

    } else {
        console.log("Your roster is full")
    }

}


  