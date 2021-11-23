// *******************************
// START HERE IF YOU WANT A MORE CHALLENGING STARTING POINT FOR THIS ASSIGNMENT
// *******************************
//
// Module 4 Assignment Instructions.
//
// The idea of this assignment is to take an existing array of names
// and then output either Hello 'Name' or Good Bye 'Name' to the console.
// The program should say "Hello" to any name except names that start with a "J"
// or "j", otherwise, the program should say "Good Bye". So, the final output
// on the console should look like this:
/*
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim

*/

// Wrap the entire contents of script.js inside of an IIFE

(function(){
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  // Loop over the names array and say either 'Hello' or "Good Bye"
  // using either the helloSpeaker's or byeSpeaker's 'speak' method.
  for (var i in names) {
    
    // Retrieve the first letter of the current name in the loop,
    // using the string object's 'charAt' function. Since we are looking for
    // names that start with either upper case or lower case 'J'/'j', we will
    // call string object's 'toLowerCase' method on the result so we can compare
    // to lower case character 'j' afterwards.
    var firstLetter = names[i].charAt(0).toLowerCase();

    // Comparing the 'firstLetter' retrieved in STEP 11 to lower case
    // 'j'. If the same, we will call byeSpeaker's 'speak' method with the current
    // name in the loop. Otherwise, helloSpeaker's 'speak' method with the current
    // name in the loop.
    if (firstLetter == 'j') {
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }
  
})();
