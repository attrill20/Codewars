/* Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.*/

function findAverage(array) {
    if (array.length === 0) {
      return 0
    }
  let sum = array.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
  },0);
    let average = sum / array.length
    return average;
  }

  // 25/5/23 completed with Jo and Ahia