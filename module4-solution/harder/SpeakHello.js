(function (window){
  var helloSpeaker = {}; /* create the helloSpeaker object */

  var speakWord = "Hello";

  helloSpeaker.speak = function (name) { /* Create a function who print a saudation inside the speaker obj */
    console.log(speakWord + " " + name);
  }

  window.helloSpeaker = helloSpeaker; /* Pass the reference of the helloSpeaker obj to the global object */

})(window); /* Call he function passing the global scope object */
