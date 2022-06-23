let strings = process.argv.slice(2);
let lastString = strings[strings.length - 1];
let translatedSentence = '';

function pigLatin(strings) {
  let translatedStrings = '';

  for (let i = 1; i < strings.length; i++) {
    translatedStrings += strings[i];
  }

  translatedStrings += strings[0];

  return translatedStrings += strings == lastString ? 'ay' : 'ay'

}

strings.forEach(function(strings) {
  translatedSentence += pigLatin(strings);
});

console.log(translatedSentence);

// function pigLatin(strings) {
//     let newString = string.split(' ')
//     console.log('newString', newString)
//     let firstLetter = newString.slice(1)
//     console.log(firstLetter + 'ay');
  
// }

// pigLatin(string);