/* Complete the function that takes a sequence of numbers as single parameter. 
Your function must return the sum of the even values of this sequence.

Only numbers without decimals like 4 or 4.0 can be even.
The input is a sequence of numbers: integers and/or floats.

Examples
[4, 3, 1, 2, 5, 10, 6, 7, 9, 8]  -->  30   # because 4 + 2 + 10 + 6 + 8 = 30
[]                               -->  0
*/


  // takes in an array of numbers
  // write a function that identifies only even integers
        // create a for loop to loop through the array?
        // push the values to a new array?
  // add up the values of these numbers
  // return the result


function sumEvenNumbers(input) {
    let emptyArr = []    //need to be declared inside the function, not sure why?
    sum = 0

    for (let i = 0; i < input.length; i++) {     // push the even numbers to new array
      if (input[i] % 2 == 0) {
        emptyArr.push(input[i])
      } 
    } 
   for (let i = 0; i < emptyArr.length; i++) {    // add the values of new array together
     sum += emptyArr[i]
   }
    return sum
  }
    
  // solved on 4/4/23 with Paul and David
  