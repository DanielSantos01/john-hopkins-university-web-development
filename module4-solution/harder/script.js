(function (){

    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

    for (var name = 0; name < names.length; name++) {
      var firstLetter = names[name].charAt(0).toLocaleLowerCase(); /* transform the first char to lower case */
    
      if (firstLetter === 'j') { /* verify if the first latter is 'j' */
        byeSpeaker.speak(names[name]);
      } else {
        helloSpeaker.speak(names[name]);
      }
    }
    
})();

