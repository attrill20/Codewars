/* A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

*/

function isPangram(string){
    // check if string contains each letter 
    // loop through checking for a, checking for b, checking for c etc
    // return true if yes, false or not

        string = string.toLowerCase();
        
        const alphabet = Array(26).fill(false);
        
        for (let i = 0; i < string.length; i++) {
          const char = string.charAt(i);
          
          if (/[a-z]/.test(char)) {
            const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
            alphabet[index] = true;
          }
        }
    
        for (let i = 0; i < alphabet.length; i++) {
          if (!alphabet[i]) {
            return false;
          }
        }

        return true;
      }
    
      // 6/6/23 completed with a bit of research, creates an array to store each letter, loops through and checks for each letter, returns false if any are missing

      function isPangram(string){
        string = string.toLowerCase();
        return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
          return string.indexOf(x) !== -1;
        });
      }

      // much neater answer from the solutions