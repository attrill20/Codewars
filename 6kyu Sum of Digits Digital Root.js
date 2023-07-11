/* Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, 
continue reducing in this way until a single-digit number is produced. 
The input will be a non-negative integer.

Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
*/

/*
​
1. Put n into an array comprised of its digits.
  - n.toString().split('')
​
2. We need to add the digits together 
 - use .map(Number).reduce(function(a, b) {return a + b})
  - This will: 1. make sure everything is a number 2. add all the values together
  
3. We need to add digits together for as long as there is more than 1 digit
​
*/
​
function digitalRoot(n) {
  // ...
  while (n.toString().length > 1) {
    
    let newArray = n.toString().split('')
    
    let result = newArray.map(Number)
    
    result = result.reduce(function(a, b) {return a+b}, 0)
    
    n = result
  }
  return n
}

// 9/5/23 completed with Mateen and Tom

function digitalRoot(n) {
  // ...
  let numStr = String(n);
  let result = 0;
  
  if(n < 10){
    return n;
  }else{
    for(let i=0; i < numStr.length; i++){
      result += Number(numStr[i])
    }
    return digitalRoot(result);
  }
}

// I like this one too, seems sensible