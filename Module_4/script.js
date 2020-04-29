(function(window) {
  var greeter = {};
  greeter.name = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
for (var i=0; i<greeter.name.length; i++ /* fill in parts of the 'for' loop to loop over names array */) {
  var firstLetter=greeter.name[i].charAt(0);
  if (firstLetter=='J' || firstLetter=='j') {
    byeSpeaker.speak(greeter.name[i]);
  } else {
    helloSpeaker.speak(greeter.name[i]);
  }
}
})(window);
