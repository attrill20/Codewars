/* Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

The order of the sequence has to stay the same.*/

function distinct(a) {
    let uniqueValues = [];

    for (let i = 0; i < a.length; i++) {
        if (!uniqueValues.includes(a[i])) {
            uniqueValues.push(a[i]);
        }
    }

    return uniqueValues;
}

// 28/7/23 - nice easy practice to start the display: 

function distinct(a) {
    return Array.from(new Set(a));
  }

  // clean solution using the Set objects (which only allows items to appear once)
