// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================

var inquirer = require("inquirer");

inquirer.prompt([
    {
        type: "input",
        message: "what's your name?",
        name: "userName"
    },
    {
        type: "input",
        message: "what is your favorite place to visit?",
        name: "location"
    },
    {
        type: "password",
        message: "please create a password",
        name: "password"
    },
    {
        type: "list",
        message: "what is your favorite food?",
        choices: ["pizza", "pasta", "sushi", "curry"],
        name: "food"
    },
    {
        type: "checkbox",
        message: "have you ever?",
        choices: ["flown in a helicopter", "been in a cave", "been to Norway", "eaten pie"],
        name: "activities"
    },
    {
        type: "confirm",
        message: "Are you satisfied with your answers?",
        name: "confirm",
        default: true
      }
])
.then (function(userResponse){
    if (userResponse.confirm){
        console.log("\nWelcome " + userResponse.userName);
        console.log("Your favorite food is " + userResponse.food + "!\n");
        console.log("Your favorite place to visit is " + userResponse.location + "!\n");
        console.log("You have " + userResponse.activities + "!\n");

    }
    else {
        console.log("\nThat's okay " + userResponse.username + ", come again when you are more sure.\n");

    }

})
