(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.Memory = function() {
  var cards = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6];
  cards = shuffle(cards);
  function shuffle(array) {
    var currentIndex = array.length;
    var temporaryValue;
    var randomIndex;

    while(0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
  return cards;
};

},{}],2:[function(require,module,exports){
var Memory = require('./../js/memory.js').Memory;

$(document).ready(function(){
  var game = Memory();
  console.log(game);
  game.forEach(function(card){
    $('#cards').append("<div id='" + card + "' class='card'><h1>" + card + "</h1></div>");
  });

});

},{"./../js/memory.js":1}]},{},[2]);
