/* Upon arriving at an interview, you are presented with a solid blue cube. 
The cube is then dipped in red paint, coating the entire surface of the cube. 
The interviewer then proceeds to cut through the cube in all three dimensions a certain number of times.

Your function takes as parameter the number of times the cube has been cut. 
You must return the number of smaller cubes created by the cuts that have at least one red face.

To make it clearer, the picture below represents the cube after (from left to right) 0, 1 and 2 cuts have been made.

Examples:
countSquares(2) --> 26
countSquares(4) --> 98

Working out (outer cubes - inner cubes)

0 = 1 (niche case)
1 = 8 (8 -0)
2 = 26 (27 - 1)
3 = 56 (64 - 8)
4 = 98 (125 - 27)
5 = 152 (216 - 64)

*/

function countSquares(cuts){
  // (cuts+1) to the power of 3 - (cuts -1) to the power of 3

 if (cuts === 0) {
    return 1;
 } else {
    return Math.pow(cuts+1,3) - Math.pow(cuts-1,3);
 }
}

// 19/4/23 - worked through this with Akiel