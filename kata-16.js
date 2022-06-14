
const makeCase = function (input, cases) {
  // Put your solution here
  if (cases === 'camel') {
    let newString = '';
    for (let i = 0; i < input.length; i++) {
      if (input[i] === ' ') {
        let capital = input[i + 1].toUpperCase();
        newString += capital;
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
        let capital = input[i + 1].toUpperCase();
        newString += capital;
        i++;
      }
      else if (input[i] !== ' ') {
        newString += input[i];
      }
    } return newString.charAt(0).toUpperCase() + newString.slice(1);
  }
  if (cases === 'snake') {
    return input.replaceAll(' ', '_')
  }
  if (cases === 'kebab') {
    return input.replaceAll(' ', '-')
  }
  if (cases === 'title') {
    let newString = '';
    for (let i = 0; i < input.length; i++) {
      if (input[i] === ' ') {
        let capital = input[i + 1].toUpperCase();
        newString += ` ${capital}`;
        i++;
      }
      else if (input[i] !== ' ') {
        newString += input[i];
      }
    } return newString.charAt(0).toUpperCase() + newString.slice(1);
  }
  if (cases === 'vowel') {
    let newString = '';
    for (let i = 0; i < input.length; i++) {
      if (input[i] === 'a' || input[i] === 'e' || input[i] === 'i' || input[i] === 'o' || input[i] === 'u') {
        let capital = input[i].toUpperCase();
        newString += capital;
      }
      else {
        newString += input[i];
      }
    } return newString;
  }
  if (cases === 'consonant') {
    let newString = '';
    for (let i = 0; i < input.length; i++) {
      if (input[i] === 'a' || input[i] === 'e' || input[i] === 'i' || input[i] === 'o' || input[i] === 'u') {
        newString += input[i];
      }
      else {
        let capital = input[i].toUpperCase();
        newString += capital;
      }
    } return newString;
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