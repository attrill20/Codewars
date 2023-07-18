/* You are given three piles of casino chips: white, green and black chips:

the first pile contains only white chips
the second pile contains only green chips
the third pile contains only black chips
Each day you take exactly two chips of different colors and head to the casino. You can choose any color, but you are not allowed to take two chips of the same color in a day.

You will be given an array representing the number of chips of each color and your task is to return the maximum number of days you can pick the chips. Each day you need to take exactly two chips.

Examples (input -> output)
* [1,1,1] -> 1, because after you pick on day one, there will be only one chip left
* [1,2,1] -> 2, you can pick twice; you pick two chips on day one then on day two
* [4,1,1] -> 2
More examples in the test cases. Good luck!

Brute force is not the way to go here. Look for a simplifying mathematical approach.

*/

    // compare arr[0], arr[1] and arr[2]
    // order the array from largest to smallest
    // take away the smallest from the largest to create a new number
    // then take this new number and compare it to the middle number

    function solve(arr){
        let result = arr.sort((a, b) => b - a)
        let a = result[0]
        let b = result[1]
        let c = result[2]
        if(a > (b+c)){
          return b+c
        } else {
          return Math.floor((a+b+c) / 2)
        }
    }

// 3/6/23 - this was tough so had to call in some help to deal with the [8,2,8] test case!