const titleCase = (text) => {
  if (text === '') {
    return '';
  };
  let array = text.toLowerCase().split(' ');
  // console.log(newString);
  let newString = [];
  array.forEach(element => {
    newString.push(element[0].toUpperCase() + element.slice(1, element.length));
  });

  return newString.join(' ');

};

// TEST CODE
console.log(titleCase("this is an example")); // => "This Is An Example"
console.log(titleCase("test")); // => "Test"
console.log(titleCase("i r cool")); // => "I R Cool"
console.log(titleCase("WHAT HAPPENS HERE")); // => "What Happens Here"
console.log(titleCase("")); // => ""
console.log(titleCase("A")); // =>"A"