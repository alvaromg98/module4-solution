// Wrap the entire contents of SpeakHello.js inside of an IIFE
(function(window){

  // Create an object, called 'helloSpeaker' to which you will attach
  // the "speak" method and which you will expose to the global context
  var helloSpeaker = {};
  var speakWord = "Hello";

  // The "speak" function is attached to the helloSpeaker object instead of
  // being a standalone function.
  helloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  // Expose the 'helloSpeaker' object to the global scope,'helloSpeaker'
  // as well.
  window.helloSpeaker = helloSpeaker;

})(window);