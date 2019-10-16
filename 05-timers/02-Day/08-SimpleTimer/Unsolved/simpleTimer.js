// Step 1:
// Use the following Audio file below:

var audio = new Audio("raven.mp3");

//  Step 2: do the following between the --- comments below
//  after 5 seconds, execute the fiveSeconds function
//  after 10 seconds, execute the tenSeconds function
//  after 15 seconds, execute the timeUp function

// ---------------------
// CODE STEP TWO HERE
/*
setTimeout(function(){
fiveSeconds()
}, 5000);

setTimeout(function(){
  tenSeconds()
  }, 10000);

setTimeout(function(){
  timeUp()
  }, 15000);
*/

  //or 
  setTimeout(fiveSeconds, 1000 = 5);
  setTimeout(tenSeconds, 1000 = 10);
  setTimeout(timeUp, 1000 = 15);
// ---------------------

/* Step 3:
// Fill in the blanks to these functions.
function fiveSeconds() {
    $("#time-left").html("<h2>About 10 Seconds Left!</h2>");
  // in the element with an id of `time-left` add an h2 saying About 10 Seconds Left!
  // console log 10 seconds left
}

function tenSeconds() {
  $("#time-left").html("<h2>About 5 Seconds Left!</h2>");
  // in the element with an id of `time-left` add an h2 saying About 5 Seconds Left!
  // console log 5 seconds left
}

function timeUp() {
  $("#time-left").html("<h2>Times Up!!</h2>");
  // in the element with an id of `time-left` add an h2 saying Time's Up!
  // console log done

  // The following line will play the audio file above
  audio.play();
}

*/ 

//the above used .html which would replace the message each time. 
// The below uses .append which would stach up the images. 

function fiveSeconds() {
  $("#time-left").append("<h2>About 10 Seconds Left!</h2>");
// in the element with an id of `time-left` add an h2 saying About 10 Seconds Left!
// console log 10 seconds left
}

function tenSeconds() {
$("#time-left").append("<h2>About 5 Seconds Left!</h2>");
// in the element with an id of `time-left` add an h2 saying About 5 Seconds Left!
// console log 5 seconds left
}

function timeUp() {
$("#time-left").append("<h2>Times Up!!</h2>");
// in the element with an id of `time-left` add an h2 saying Time's Up!
// console log done

// The following line will play the audio file above
audio.play();
}