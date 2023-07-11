/* Create a function which compares two probabilities, returning true if the first one is most likely otherwise false.

For this exercise probability is expressed as two numbers separated by a colon e.g. a probability of 1 in 3 will be 1:3.

So:

Input: ('1:3','1:2') - returns false as 1 in 3 is less likely than 1 in 2.
*/

function mostLikely(prob1,prob2){
    // takes in the two probabilities
    // convert the two probabilities e.g. 1:3 to a fraction / division 1/3 = 0.333

    num1 = prob1.split(':')
    num1divided = num1[0] / num1[1]

    num2 = prob2.split(':')
    num2divided = num2[0] / num2[1]

    // compare the two numbers

    if (num1divided < num2divided) {
        return false
    } else {
        return true
    }
    // return true if the first is more likely (the decimal is higher) (if statements)
    // return false if the second is higher
  }

  // 17/5/23 completed with Jordan and Hung