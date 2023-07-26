/*Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

What is considered Valid?
A string of braces is considered valid if all braces are matched with the correct brace.

Examples
"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False*/

function validBraces(braces){
    const stack = [];
    const openingBraces = '({[';
    const closingBraces = ')}]';
    const bracePairs = {
      ')': '(',
      '}': '{',
      ']': '[',
    };
  
    for (const brace of braces) {
      if (openingBraces.includes(brace)) {
        stack.push(brace);
      } else if (closingBraces.includes(brace)) {
        const lastOpeningBrace = stack.pop();
        if (lastOpeningBrace !== bracePairs[brace]) {
          return false;
        }
      }
    }
  
    return stack.length === 0;
  }

  // 26/7/23 - this uses a 'stack data structure' to check if it has a closing brace, and pops it if so otherwise returns invalid. The final check is if the stack is now empty as all pairs have been removed, so returns true

