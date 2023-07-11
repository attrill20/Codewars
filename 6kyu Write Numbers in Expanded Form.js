/* Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.

*/

function expandedForm(num) {
    // round down to nearest large number (num.length = that many values)
    // take away that from the original num
    // then repeat process
    // return as a string 'x + y + z' etc 


        let str = num.toString(); // Convert number to string
        let result = []; // Array to store expanded form components
      
        for (let i = 0; i < str.length; i++) {
          var digit = parseInt(str[i]); // Get the digit at each position
      
          if (digit !== 0) {
            let expandedDigit = digit * Math.pow(10, str.length - i - 1);
            result.push(expandedDigit);
          }
        }
      
        return result.join(" + "); // Join the expanded form components with ' + '
      }

      // completed on 24/5/23 with a bit of help looking up parseInt (which turns the string back into a number) and how to work out the expandedDigit calculation which identifies location in the number and multiplies it by a power based on that

      function expandedForm(num) {
        num = String(num);
        let result = [];
        for (var i = 0; i < num.length; i++) {
            if (num[i] == 0) continue;
            else result.push(num[i] + "0".repeat(num.length -i -1))
        }
        return result.join(" + ")
    }

    // this looks neater from the solutions, but similar idea (continue is new to me)