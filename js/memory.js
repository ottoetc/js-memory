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
