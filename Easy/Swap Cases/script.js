function swaping(word) {
  return word
    .split('')
    .filter((el) => isNaN(el))
    .map((el) =>
      el === el.toUpperCase() ? el.toLowerCase() : el.toUpperCase(),
    )
    .join('');
}

console.log(swaping('HellO')); // hELLo
console.log(swaping('WOrld')); // woRLD
console.log(swaping('12ProGRAM12')); // pROgram
