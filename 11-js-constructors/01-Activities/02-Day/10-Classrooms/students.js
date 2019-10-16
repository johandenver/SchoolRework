/*
* The first constructor function is called "Student" and has the following properties within it...

  * Name of the student
  * Favorite subject
  * Current GPA
*/

var Students = function(name, favoriteSubject, gpa){
    
    this.name = name;
    this.favoriteSubject = favoriteSubject;
    this.gpa = gpa;

}

module.exports = Students;