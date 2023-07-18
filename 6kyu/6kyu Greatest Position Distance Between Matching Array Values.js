/* The goal of this Kata is to return the greatest distance of index positions between matching number values in an array or 0 if there are no matching values.

Example: In an array with the values [0, 2, 1, 2, 4, 1] the greatest index distance is between the matching '1' values at index 2 and 5. Executing greatestDistance/greatest_distance/GreatestDistance with this array would return 3. (i.e. 5 - 2)

Here are some extra examples:

[0, 2, 1, 2, 4, 1]            => 3 (1's at indices 2 and 5)
[9, 7, 1, 2, 3, 7, 0, -1, -2] => 4 (7's at indices 1 and 5)
[0, 7, 0, 2, 3, 7, 0, -1, -2] => 6 (0's at indices 0 and 6)
[1, 2, 3, 4]                  => 0 (no repeated elements)
This is based on a Kata I had completed only to realize I has misread the instructions. I enjoyed solving the problem I thought it was asking me to complete so I thought I'd add a new Kata for others to enjoy. There are no tricks in this one, good luck!*/

  // check for matching values
    // if no matching values, return 0
    // if matching values, return the greatest distance between them
    // distance = index of last matching value - index of first matching value

var greatestDistance = function(data) {
    let greatestDistance = 0;
    let matchingValues = [];
    for (let i = 0; i < data.length; i++) {
        if (data.indexOf(data[i]) !== data.lastIndexOf(data[i])) {
            matchingValues.push(data[i]);
        }
    }
    if (matchingValues.length === 0) {
        return 0;
    }
    for (let i = 0; i < matchingValues.length; i++) {
        let firstIndex = data.indexOf(matchingValues[i]);
        let lastIndex = data.lastIndexOf(matchingValues[i]);
        let distance = lastIndex - firstIndex;
        if (distance > greatestDistance) {
            greatestDistance = distance;
        }
    }
    return greatestDistance;
};

// 20/6/23 - completed with some long winded help from autopilot

var greatestDistance = function(data) {
    return data.reduce((a,b)=>Math.max(a,data.lastIndexOf(b)-data.indexOf(b)),0)
  };

  // much nicer solution from the submissions
  