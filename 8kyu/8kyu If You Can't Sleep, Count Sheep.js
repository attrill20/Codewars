/*If you can't sleep, just count sheep!!

Task:
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". 
Input will always be valid, i.e. no negative integers.
*/

    // take in a number
    // return a string with 'n sheep...' repeated for the number
    // include an if for '0 sheep'

    // for loop? 


var countSheep = function (num){
    
    let str = "";

    if (num > 0) {
        for (i=1; i <= num; i++) {
            str = str + `${i} sheep...`;
        }
    } else {
        return "";
    }
    return str;
  }

  // 19/4/23 - completed with the help of Akiel