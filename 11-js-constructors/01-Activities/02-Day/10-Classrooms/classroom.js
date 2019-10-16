var Students = require("./students");

var Classroom = function(classSize, professor, roomNumber){
    this.class = [];
    this.classSize = classSize;
    this.professor = professor;
    this.roomNumber = roomNumber;

  
    // This method that creates a CastMember object from the constructor function we required and pushes it to the `this.cast` array
    this.addStudents = function(name, favoriteSubject, gpa) {
      this.class.push(new Students(name, favoriteSubject, gpa));
    };
}

module.exports = Classroom;
/*
* The second constructor function is called "Classroom" and has and has the following properties within it...

  * An array of students within the class
  * Number of students in the class
  * Name of the professor
  * Room number
  * The Student constructor function from above which adds a new student to the class
  */