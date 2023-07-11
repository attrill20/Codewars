/* Your function takes two arguments:

current father's age (years)
current age of his son (years)
Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). 
The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.
*/

function twiceAsOld(dadYearsOld, sonYearsOld) {
    // work out when dad is twice as old as son
    // age = dad - son
    // age * 2
    // answer = son - age

    let newAge = dadYearsOld - sonYearsOld;
    let gap = newAge * 2;
    let answer = dadYearsOld - gap;

    return Math.abs(answer);
  }

  // 8/5/23 - worked out by myself, learnt Math.abs for returning only positive integers

  function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs(dadYearsOld - 2 * sonYearsOld);
  }

  // neater