// 1-
function removeCharFromOne(word, c) {
  return word
    .split('')
    .filter((el) => el !== c.toUpperCase() && el !== c.toLowerCase())
    .join('');
}

console.log(removeCharFromOne('ElddzeroD WebDD ddSchool', 'd'));
console.log(removeCharFromOne('ElxzeroX Web Sxchool', 'x'));
console.log(removeCharFromOne('Elzero@ Web@@ @@School', '@'));

// 2-
function removeCharFromTwo(word, c) {
  let regular = new RegExp(`${c}`, 'gi');
  return word.replace(regular, '');
}

console.log(removeCharFromTwo('ElddzeroD WebDD ddSchool', 'd'));
console.log(removeCharFromTwo('ElxzeroX Web Sxchool', 'x'));
console.log(removeCharFromTwo('Elzero@ Web@@ @@School', '@'));