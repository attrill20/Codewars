
/*Given an array of integers.

Return an array, where the first element is the count of positives numbers 
and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/
function countPositivesSumNegatives(input) {
    // your code here
    // first number is the COUNT of positives
    // second number is the SUM of negatives
    
    // return [COUNT, SUM]
    let count = 0
    let sum = 0
  
    
    if (input === null || input === []) {
      return [];
    }
      
    for (let i = 0; i < input.length; i++) {
      if (input[i] > 0) {
        count ++
      } else if (input[i] < 0) {
        sum += input[i]
      } 
    }
    
    if (count === 0 && sum === 0) {
      return []
    }
    
    return [count, sum];
  }

  // completed 11/4/23 with Bryony and Michael