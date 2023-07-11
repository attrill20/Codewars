/* It's pretty straightforward. 
Your goal is to create a function that removes the first and last characters of a string. 
You're given one parameter, the original string. 
You don't have to worry with strings with less than two characters.
*/


function removeChar(str){
    // run a piece of code that identifies first letter and slices(?) it off 
    // run a piece of code that identifies last letter and slices it off 
    // return the string without those letters 

   const newStr = str.slice(1,-1);
   return newStr;
   };

   // completed on 18/4/23 with the help of Saynab and Akiel

   function removeChar(str){return str.slice(1,-1)};