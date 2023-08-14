/* When no more interesting kata can be resolved, I just choose to create the new kata, to solve their own, to enjoy the process --myjinxin2015 said

Description:
Given two array of integers(arr1,arr2). Your task is going to find a pair of numbers(an element in arr1, and another element in arr2), their difference is as big as possible(absolute value); Again, you should to find a pair of numbers, their difference is as small as possible. Return the maximum and minimum difference values by an array: [  max difference,  min difference  ]

For example:

Given arr1 = [3,10,5], arr2 = [20,7,15,8]
should return [17,2] because 20 - 3 = 17, 10 - 8 = 2
Note:
arr1 and arr2 contains only integers(positive, negative or 0);
arr1 and arr2 may have different lengths, they always has at least one element;
All inputs are valid.
This is a simple version, if you want some challenges, try the challenge version.
Some Examples
maxAndMin([3,10,5],[20,7,15,8]) === [17,2]
maxAndMin([3],[20]) === [17,17]
maxAndMin([3,10,5],[3,10,5]) === [7,0]
maxAndMin([1,2,3,4,5],[6,7,8,9,10]) === [9,1]*/

function maxAndMin(arr1, arr2) {

    // sort both arrays from largest to smallest
    // take max in 1 from min in other, and vice versa
    // compare to identify the maxdiff
    // loop through the two arrays and track the smallest difference found 
    // return this as mindiff
    // return an array of these two

    const sortedArr1 = arr1.slice().sort((a, b) => a - b);
    const sortedArr2 = arr2.slice().sort((a, b) => a - b);

    const maxDiff = Math.max(
        Math.abs(sortedArr1[sortedArr1.length - 1] - sortedArr2[0]),
        Math.abs(sortedArr2[sortedArr2.length - 1] - sortedArr1[0])
    );

    let minDiff = Math.abs(sortedArr1[0] - sortedArr2[0]);
    for (const num1 of sortedArr1) {
        for (const num2 of sortedArr2) {
            minDiff = Math.min(minDiff, Math.abs(num1 - num2));
        }
    }

    return [maxDiff, minDiff];
}

// 14/8/23 - very different approaches needed to calculate the two figures 

function maxAndMin(arr1,arr2){
    return [
      Math.max( ...arr1.map(n => Math.max( ...arr2.map(m => Math.abs(n - m)) )) ),
      Math.min( ...arr1.map(n => Math.min( ...arr2.map(m => Math.abs(n - m)) )) )
    ]
  }

  // neater, but less easier to read example from the solutions
