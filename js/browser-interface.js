var Memory = require('./../js/memory.js').Memory;

$(document).ready(function(){
  var game = Memory();
  console.log(game);
  game.forEach(function(card){
    $('#cards').append("<div id='" + card + "' class='card'><h1>" + card + "</h1></div>");
  });

});
