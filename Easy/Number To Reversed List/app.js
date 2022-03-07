// 1-
function convertOne(num) {
  return num
    .toString()
    .split('')
    .map((el) => +el)
    .reverse();
}

console.log(convertOne(564987654)); // [4, 5, 6, 7, 8, 9, 4, 6, 5]
console.log(convertOne(529132)); // [2, 3, 1, 9, 2, 5]

// 2-
function convertTwo(num) {
  let theString = num.toString();
  let arrayOfNumbers = theString.split('');
  let emptyArray = [];

  for (let i = 0; i < arrayOfNumbers.length; i++) {
    emptyArray.unshift(+arrayOfNumbers[i]);
  }
  return emptyArray;
}

console.log(convertTwo(564987654)); // [4, 5, 6, 7, 8, 9, 4, 6, 5]
console.log(convertTwo(529132)); // [2, 3, 1, 9, 2, 5]
