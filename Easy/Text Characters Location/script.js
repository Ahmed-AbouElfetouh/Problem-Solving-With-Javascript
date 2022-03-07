function wordsToNum(word) {
  let alpha = 'abcdefghijklmnopqrstuvwxyz';
  let position = '';
  for (let i = 0; i < word.length; i++) {
    position += alpha.indexOf(word[i].toLowerCase()) + 1 + ' ';
  }
  return position;
}
console.log(wordsToNum('Elzero')); // "5 12 26 5 18 15"
console.log(wordsToNum('Ahmed')); // "1 8 13 5 4"
