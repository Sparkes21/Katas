
function pigLatin(string) {
    let newString = string.split(' ')
    console.log('newString', newString)
    let firstLetter = newString.slice(1)
    console.log(firstLetter + 'ay');
  
}

pigLatin("pig latin");