const calculateChange = function(total, cash) {
  let returnValue = cash - total;
  let change = {};
  
  const coinTypes = ['twentyDollar', 'tenDollar', 'fiveDollar', 'twoDollar', 
                     'dollar', 'quarter', 'dime', 'nickle', 'penny'];

  const coinValues = [2000, 1000, 500, 200, 100, 25, 10, 5, 1];

  let amount;

  for (let i = 0; i < coinValues.length; i++) {
    amount = Math.floor(returnValue/coinValues[i]);
    if (amount > 0) {
      change[coinTypes[i]] = amount;
      returnValue = returnValue%coinTypes[i]
    }
  }
  


  return change;
};


console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));


// EXPECTED OUTPUT
// { twoDollar: 1, dime: 1, penny: 3 }
// { tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
// { twoDollar: 2, quarter: 3, dime: 2, penny: 4 }