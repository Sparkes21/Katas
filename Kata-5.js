const urlEncode = function(text) {
  let encoded = '';
   text = text.trim();
  for (let i = 0; i < text.length; i++) {
    if (text[i] === ' ') {
      encoded += '%20';
    }
    else if (text[i] !== ' ') {
      encoded += text[i];
    }
  }
  return encoded;
};
console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));

