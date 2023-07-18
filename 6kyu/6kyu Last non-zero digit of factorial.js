/* Your task is to find the last non-zero digit of n! (factorial).

n!=1×2×3×⋯×n

Example:
479001600
12!=479001600

Input
Non-negative integer n
Range: 0 - 2.5E9

Output
Last non-zero digit of n!

Note: Calculating the whole factorial will timeout.*/

function lastDigit(n) {
    // if ends in 0 then divide by 10
    // repeat this until non-zero
    // then check for the current number in last position

        while (n !== 0 && n % 10 === 0) {
          n /= 10;
        }
      
        const lastDigit = n % 10;
      
        return lastDigit;
      }

      // 11/7/23 (this doesn't fully work as causes a time out - will come back to this)