function addCommasAndUnderscore(number) {
  let theArray = number.toLocaleString().split('');
  let theArrayL = theArray.length;
  theArray[theArrayL - 4] = '_';
  return theArray.join('');
}
console.log(addCommasAndUnderscore(120));
console.log(addCommasAndUnderscore(1530));
console.log(addCommasAndUnderscore(120510650));
console.log(addCommasAndUnderscore(510650480910));
console.log(addCommasAndUnderscore(12069057014032));
