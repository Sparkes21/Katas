const multiplicationTable = function(maxValue) {
  let table = '';
  for (let i = 1; i <= maxValue; i++) {
    for (let j = 1; j <= maxValue; j++) {
     if (j % maxValue === 0 ) {
       table = (table + (i * j)) + '\n';
     } else {
       table = (table + (i* j)) + ' ';
     }
    }
  }
  return table;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));