function sort(names) {
  let small = names
    .filter((el) => {
      return el.startsWith('a');
    })
    .sort((a, b) => {
      return a.length - b.length || a.localeCompare(b);
    });
  let capital = names
    .filter((el) => {
      return el.startsWith('A');
    })
    .sort((a, b) => {
      return a.length - b.length || a.localeCompare(b);
    });
  return [...small, ...capital];
}

console.log(
  sort([
    'Ameer',
    'alsayed',
    'Mahmoud',
    'Ahmed',
    'ayman',
    'Israa',
    'Anas',
    'amal',
    'amr',
    'aml',
  ]),
);
//  ["aml", "amr", "amal", "ayman", "alsayed", "Anas", "Ahmed", "Ameer"]
