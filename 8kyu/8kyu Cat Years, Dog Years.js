/* I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.
Return their respective ages now as [humanYears,catYears,dogYears]
NOTES:

humanYears >= 1
humanYears are whole numbers only
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that
*/


function humanYearsCatYearsDogYears(humanYears) {
    let catYears = 0;
    let dogYears = 0;
    
    if (humanYears === 1) {
      catYears = 15;
      dogYears = 15;
    } else if (humanYears === 2) {
      catYears = 24;
      dogYears = 24;
    } else {
      catYears = 24;
      dogYears = 24;
      for (let i = 3; i <= humanYears; i++) {
        catYears += 4;
        dogYears += 5;
      }
    }
    return [humanYears, catYears, dogYears];
}

// Did this with the help of Latifa and Safiyah, 29/3/23