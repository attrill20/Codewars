/* The span function is a good one to know. It accepts a sequence and a predicate function and returns two sequences. 
The first sequence contains all the elements of the argument sequence up to the item that caused the first failure of the predicate. 
The second returned sequence contains the rest of the original sequence. The original sequence is not modified.

For example,

function isEven (x) {
  return Math.abs(x) % 2 === 0;
}

var arr = [2,4,6,1,8,10];

// This is true
span(arr, isEven) === [[2,4,6],[1,8,10]]
Your task is to...wait for it... write your own span function !!!

Hint/Challenge: If you have completed the takeWhile function and the dropWhile function, then you can solve this problem in one line! */

function span(arr, predicate) {
  const passed = [];
  const failed = [];
  for (let i = 0; i < arr.length; i++) {
    if (predicate(arr[i])) {
      passed.push(arr[i]);
    } else {
      failed.push(...arr.slice(i));
      break;
    }
  }
  return [passed, failed];
}

// 10/5/23 - this was tough. needed some GPT help on this, but should set up two arrays, successfully slice at the first fail point
// into 2 separate arrays and them break. Also returns a blank array for either passed / failed if no examples in either

function span(arr, predicate) {
  for(var i = 0; i<arr.length && predicate(arr[i]); i++);
  return [arr.slice(0,i), arr.slice(i)];
}

// I like this slicker answer from CodeWars
  