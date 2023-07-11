/* Given an integer n and two other values, build an array of size n filled with these two values alternating.

Examples
5, true, false     -->  [true, false, true, false, true]
10, "blue", "red"  -->  ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
0, "one", "two"    -->  []
Good luck!

*/

function alternate(n, firstValue, secondValue){
    // take in n = length of array
    // wrap this in a for loop and execute below if less than n
    // if - 
    // push firstValue to a new array
    // push the secondValue to the array
    // if else - when array.length = n STOP!
    // return the array

    arr = []

    for (let i=0; i < n; i++) {
        if (arr[i-1]!== firstValue) {   //last object in arr is not firstValue, push firstValue 
             arr.push(firstValue)
        } else {   //is last object in arr is firstValue, push secondValue)
            arr.push(secondValue)
        }
    }
    console.log(arr);
    return arr;
}

// completed on 16/5/23 with Jordan and Hung

function alternate(n, firstValue, secondValue){
    const array = [];
    for (let i = 0; i < n; i++) {
      array.push(i % 2 === 0 ? firstValue : secondValue)
    }
    return array;
  }

  // neater solution from CodeWars using the conditional ternary operator

