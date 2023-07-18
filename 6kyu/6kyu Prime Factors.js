/* Prime Factors
Inspired by one of Uncle Bob's TDD Kata

Write a function that generates factors for a given number.

The function takes an integer as parameter and returns a list of integers (ObjC: array of NSNumbers representing integers). That list contains the prime factors in numerical sequence.

Examples
1  ==>  []
3  ==>  [3]
8  ==>  [2, 2, 2]
9  ==>  [3, 3]
12 ==>  [2, 2, 3]
*/

function primeFactors(n) {
    let factors = []; // set up a blank array

    for (let i = 2; i <= n; i++) { // start at 2, go up to n
        while (n % i === 0) { // while n is divisible by i
            factors.push(i); // push i to the array
            n /= i;     // divide n by i
        }
    }
    return factors;
}

// 20/6/23 - quite straigthforward logic here