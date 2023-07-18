/* Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because */

function squareSum(numbers){
    //    Square the numbers taken in
    //   Then add them together
      let newArr = []
      let sum = 0 // define the varaibles
      
      for(let i = 0; i < numbers.length; i++) {
        let square = numbers[i] ** 2
        newArr.push(square)   // square the numbers and push to new array
      }

      for (let i = 0; i < newArr.length; i++) {
        sum += newArr[i]  // add up the new array
      }
      return sum
    }

    // Solved on 5/4/23 with Paul and David

    function squareSum(numbers){
        return numbers.reduce(function(sum, n){
          return (n*n) + sum;
        }, 0)
      }

      // This was a nice answer from CodeWars, that used the reduce() function that takes in an 'accumulator'
      // and a 'current value' and adds them together and returns a single number