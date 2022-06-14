
const makeCase = function (input, cases) {
  // Put your solution here
  if (cases === 'camel') {
    let newString = '';
    for (let i = 0; i < input.length; i++) {
      if (input[i] === ' ') {
        let captial = input[i + 1].toUpperCase();
        newString += captial;
        i++;
      }
      else if (input[i] !== ' ') {
        newString += input[i];
      }
    } return newString;
  };
  if (cases === 'pascal') {
    let newString = '';
    for (let i = 0; i < input.length; i++) {
      if (input[i] === ' ') {
        let captial = input[i + 1].toUpperCase();
        newString += captial;
        i++;
      }
      else if (input[i] !== ' ') {
        newString += input[i];
      }
    } return newString.charAt(0).toUpperCase() + newString.slice(1);
  }
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));