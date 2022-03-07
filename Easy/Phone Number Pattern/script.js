function phoneNumberPattern(list) {
  let theString = list.join('');
  let phoneRe = /^(\d{3})(\d{3})(\d{4})$/;
  let match = theString.match(phoneRe);

  if (match) {
    return `${match[1]} ${match[2]}-${match[3]}`;
  }
  return 'Invalid Phone Number';
}

console.log(phoneNumberPattern([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // Output "(123) 456-7890"
console.log(phoneNumberPattern([6, 2, 4, 7, 2, 1, 0, 2, 1, 1])); // Output "(624) 721-0211"
console.log(phoneNumberPattern([1, 5, 5, 4, 9, 8, 6, 7, 1, 2, 1])); // Output "Invalid Phone Number"
