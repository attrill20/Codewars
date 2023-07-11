/* Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language) that
determines if a given non-negative integer is a power of two. 
From the corresponding Wikipedia entry:

a power of two is a number of the form 2n where n is an integer, 
i.e. the result of exponentiation with number two as the base and integer n as the exponent.

You may assume the input is always valid.

Examples
isPowerOfTwo(1024) // -> true
isPowerOfTwo(4096) // -> true
isPowerOfTwo(333)  // -> false
Beware of certain edge cases - for example, 1 is a power of 2 since 2^0 = 1 and 0 is not a power of 2.
*/

function isPowerOfTwo(n){
    
return Number.isInteger(Math.log2(n));
    }

// 18/4/23 completed with Saynab and Akiel
// 'isInteger has an inbuilt check of - boolean value true if the given value is an integer. Otherwise false.

function isPowerOfTwo(n){
    if(n == 1)
      return true
    if(n < 1)
      return false
  
   return isPowerOfTwo(n / 2)
  }

  // This is a clever way of calling itself until you either get down to 1 or less than 1 (recursion)

  function isPowerOfTwo(n){
    return Math.log2(n) % 1 === 0;
  }

  // This is a nice example, similar to the top one but using the % (remainder operator) to check if there is 
  // anything left over after the Math.log2(n). This seems to have an inbuilt boolean check