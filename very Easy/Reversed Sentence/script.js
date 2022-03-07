function reverse(sentence) {
  let result = sentence.split(" ").reverse().join(' ');
  return result
}
console.log(reverse("Elzero Web School"))