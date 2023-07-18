/* Given an array, find the duplicates in that array, and return a new array of those duplicates. 
The elements of the returned array should appear in the order when they first appeared as duplicates.

Note: numbers and their corresponding string representations should not be treated as duplicates (i.e., "1" != 1).

Examples
[1, 2, 4, 4, 3, 3, 1, 5, 3, "5"]  ==>  [4, 3, 1]
[0, 1, 2, 3, 4, 5]                ==>  []
*/

function duplicates(arr) {
    // run a for loop through the array
    // nest a for loop inside
    // if any matches, add to new array
    // return to that array

    let duplicatesArr = [];
    let seenValues = {};

  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    let typeValue = typeof current + "-" + current;

    if (seenValues.hasOwnProperty(typeValue)) {
      if (!duplicatesArr.includes(current)) {
        duplicatesArr.push(current);
      }
    } else {
      seenValues[typeValue] = true;
    }
  }
  return duplicatesArr;
}

// completed on 15/5/23 - had to ask ChatGPT to help me refactor this to ensure values returned in the same order.
// Had already worked out the idea of a nested loop, but replaced it with this

function duplicates(arr) {
    return arr.reduce(function(prev, cur, i, a) {
      if (i !== a.indexOf(cur) && prev.indexOf(cur) === -1) {
        prev.push(cur);
      }
      return prev;
    }, []);
  }

  // easier solution from the submissions