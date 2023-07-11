/* Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

Note: The function accepts an integer and returns an integer.

Happy Coding!
*/

function squareDigits(num) {
    let myArr = num.toString().split('')
    //let secondArr = myArr.map(Number)
     let newArr = [];
   
     for (let i = 0; i < myArr.length; i++) {
       let number = myArr[i] * myArr[i];
       newArr.push(number);
     }
   
     let answer = newArr.join('')
     let final = Number(answer)
     return final;
   }

   // 24/5/23 completed with Jo in the morning

   function flippingBits(n) {
    // we basically need to flip the number
    // e.g. 1, becomes 1 away from the biggest number
    // largest number is 4294967286 (2^32) 
    // halfway point is 2147483643 
    
    // test: 2147483647 (4294967295 - 2147483647 = 2147483648)

    // loop through the returns
    // take the number and subtract it from 4294967295
    // push it to a new array
    // return that number
    
    let newArr = []
    
    for (let i=0; i < n.length; i++) {
        let swap = 4294967295 - num[i]
        console.log(swap)
        newArr.push(swap)
    }
    return newArr
}


