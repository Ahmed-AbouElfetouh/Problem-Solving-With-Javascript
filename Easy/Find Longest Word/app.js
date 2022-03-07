//  1-
function findLongestWordOne(sentance) {
  let arrayOfWords = sentance.split(' ');
  let number = 0;
  let result = '';
  for (let i = 0; i < arrayOfWords.length; i++) {
    if (arrayOfWords[i].length > number) {
      number = arrayOfWords[i].length;
      result = arrayOfWords[i];
    }
  }
  return result;
}
console.log(
  findLongestWordOne(
    "i'm programmer we love elzero academy tooooooooooooo much",
  ),
);

// 2-
function findLongestWordTwo(sentance) {
  return sentance
    .split(' ')
    .reduce((acc, current) => (current.length > acc.length ? current : acc));
}
console.log(
  findLongestWordTwo(
    "i'm programmer we love elzero academy tooooooooooooo much",
  ),
);
