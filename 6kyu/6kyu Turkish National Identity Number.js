/* Every Turkish citizen has an identity number whose validity can be checked by these set of rules:

It is an 11 digit number
First digit can't be zero
Take the sum of 1st, 3rd, 5th, 7th and 9th digit and multiply it by 7. Then subtract the sum of 2nd, 4th, 6th and 8th digits from this value. Modulus 10 of the result should be equal to 10th digit.
Sum of first ten digits' modulus 10 should be equal to eleventh digit.
Example:

10167994524
//  1+1+7+9+5= 23   // "Take the sum of 1st, 3rd, 5th, 7th and 9th digit..."
//    23 * 7= 161   //  "...and multiply it by 7"
//   0+6+9+4 = 19   // "Take the sum of 2nd, 4th, 6th and 8th digits..."
// 161 - 19 = 142   // "...and subtract from first value"
// "Modulus 10 of the result should be equal to 10th digit"
10167994524
         ^ = 2 = 142 % 10
// 1+0+1+6+7+9+9+4+5+2 = 44
// "Sum of first ten digits' modulus 10 should be equal to eleventh digit"
10167994524
          ^ = 4 = 44 % 10
Your task is to write a function to check the validity of a given number. Return true or false accordingly.

Note: The input can be a string in some cases.*/

function checkValidTrNumber(n) {
    // convert n to string to access length
    // check if 11 digit number
    // check that first digit is not zero

    // then add 1st, 3rd, 5th, 7th and 9th digit..."
    // multiply by 7 to get first value
    // "Take the sum of 2nd, 4th, 6th and 8th digits..."
    // subtract from first value
    // check if modulus 10 of this result equals the 10th digit
    // check if modulus 10 of (first 10 digits sum) equals the 11th digit

    // return true or false 

    let nStr = String(n);

    if (nStr.length !== 11 || nStr[0] === '0') {
        return false;
    }

    let value1 = (Number(nStr[0]) + Number(nStr[2]) + Number(nStr[4]) + Number(nStr[6]) + Number(nStr[8])) * 7;
    let value2 = Number(nStr[1]) + Number(nStr[3]) + Number(nStr[5]) + Number(nStr[7]);

    let check1 = value1 - value2;

    if (check1 % 10 !== Number(nStr[9])) {
        return false;
    }

    let check2 = Number(nStr[0]) + Number(nStr[1]) + Number(nStr[2]) + Number(nStr[3]) + Number(nStr[4]) + Number(nStr[5]) + Number(nStr[6]) + Number(nStr[7]) + Number(nStr[8]) + Number(nStr[9]);

    if (check2 % 10 !== Number(nStr[10])){
        return false;
    }

    return true;
}

// completed 19/7/23 - pleased with how good my plan was and I understood all the logic here. However, realised that I had originally written it out all as 'n' which had already been converted to a string so couldn't be added together! Saved time by using ChatGPT to help add a Number before all of them, but there is bound to be a much slicker answer from the solutions...

function checkValidTrNumber(n) {
    var nums = n.toString().split('').map(Number);
    return nums.length === 11 &&
      nums[0] !== 0 &&
      ((nums[0] + nums[2] + nums[4] + nums[6] + nums[8]) * 7 - (nums[1] + nums[3] + nums[5] + nums[7])) % 10 === nums[9] &&
      nums.reduce(function(p, c, index) { return (index === 10) ? p : p + c; }) % 10 === nums[10];
  }

  // this is much neater

  function checkValidTrNumber(n) {
    // turn n to string
    var numStr = n.toString();
      
    // return false if length != 11
      if (numStr.length !== 11) return false;
      
    // turn string to array then turn strings to numbers
      var arr = numStr.split("").map(Number);
    
    // if starts with 0 return false
      if (arr[0] === 0) return false;
    
    // complete first validation
      var step1 = (arr[0] + arr[2] + arr[4] + arr[6] + arr[8]) * 7 - (arr[1] + arr[3] + arr[5] + arr[7]);
      if (step1 % 10 !== arr[9]) return false;
      
    // complete second validation
      var step2 = arr[0] + arr[1] + arr[2] + arr[3] + arr[4] + arr[5] + arr[6] + arr[7] + arr[8] + arr[9];
      if (step2 % 10 !== arr[10]) return false;
      
      return true;
  }

  // this is more similar to mine and is well notated too