function findPositionFor(letter) {
  let englishLetters = 'abcdefghijklmnopqrstuvwxyz';
  let position = englishLetters.toUpperCase().indexOf(letter) + 1;
  return position;
}

console.log(findPositionFor('C'));
console.log(findPositionFor('P'));
console.log(findPositionFor('S'));
console.log(findPositionFor('A'));
