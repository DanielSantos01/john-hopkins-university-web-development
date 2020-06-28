(function (window){
  var byeSpeaker = {}; /* create the byeSpeaker object */

  var speakWord = "Good Bye";

  byeSpeaker.speak = function (name) { /* create a function who says goodbye inside the object */
    console.log(speakWord + " " + name);
  }

  window.byeSpeaker = byeSpeaker; /* pass the reference of the speaker to the global scope */

})(window); /* pass the global object to the function */
