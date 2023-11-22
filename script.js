
(function () {

var names = ["Ankita","Jaya","Ram","Jojo","Riya","Sayan","Jahanara","Mahua","Pritam","virat","Jigyasha"];

for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 'j') {
    byeSpeaker(names[i]);
  }
  else {
    helloSpeaker(names[i]);
  }
}

})();

