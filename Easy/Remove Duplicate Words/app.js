// 1-
function removeDuplicateWordsFromOne(sentance) {
  let arrayOfWords = sentance.split(' ');
  let emptyArray = [];
  for (let i = 0; i < arrayOfWords.length; i++) {
    if (emptyArray.indexOf(arrayOfWords[i]) === -1) {
      emptyArray.push(arrayOfWords[i]);
    }
  }
  return emptyArray.join(' ');
}
console.log(removeDuplicateWordsFromOne('Hello Elzero Web Web Hello School'));

// 2-
function removeDuplicateWordsFromTwo(sentance) {
  return [...new Set(sentance.split(' '))].join(' ');
}
console.log(removeDuplicateWordsFromTwo('Hello Elzero Web Web Hello School'));
