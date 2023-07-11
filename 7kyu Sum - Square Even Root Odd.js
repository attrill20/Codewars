/* Complete the function that takes a list of numbers (nums), as the only argument to the function. Take each number in the list and square it if it is even, or square root the number if it is odd. Take this new list and return the sum of it, rounded to two decimal places.

The list will never be empty and will only contain values that are greater than or equal to zero.

Good luck!
*/

const sumSquareEvenRootOdd = ns => {
    // for loop
    // check if number is even or odd (if statement with the % sign)
    // if even - square it 
    // if odd - square root it 
    // return sum of it, round to decimal places

    let arr = []

    for (let i = 0; i < ns.length; i++) {
        if (ns[i] % 2 == 0) {
        arr.push (ns[i] * ns[i])
    } else {
        arr.push (Math.sqrt(ns[i]))
    }
}
    let sum = arr.reduce(function (a, b) {return a + b;}, 0);

    return Number(sum.toFixed(2));
  };

  // 30/5/23 - completed by myself before the course

  const sumSquareEvenRootOdds = ns => {
    let odd = ns.filter(e => e % 2).reduce((a,b) => a + Math.sqrt(b),0);
    let even = ns.filter(e => !(e % 2)).reduce((a,b) => a + Math.pow(b,2),0);
    return +(odd + even).toFixed(2)
  };

  // neater