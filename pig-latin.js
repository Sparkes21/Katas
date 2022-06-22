
function pigLatin(string) {
  for (let i = 0; i < string.length; i++) {
    let firstLetter = string.slice(1)
    console.log(firstLetter);
  }
}

pigLatin("hello");