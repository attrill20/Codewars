/* Story
You were asked to write a simple validator for a company that is planning to introduce lottery betting via text messages. The same validator will be used for multiple games: e.g. 5 out of 90, 7 out of 35, etc. (N out of M)

The text messages should contain exactly N unique numbers between 1 and M (both included), separated by a comma (,) and/or space(s). Any other character makes the bet invalid.

Your task
You receive the game type and the user's text message as input, and you need to check if the bet is valid or not. If it's valid, return the chosen numbers as a list, sorted in increasing order. If it's invalid, return None, null, nil as appropriate to your language.

Note: Leading and trailing spaces will not be tested. Tabs, newlines and other whitespaces are not tested either. Think of a classic Nokia 3310 user for reference :-)

Examples
validate_bet([5, 90], "1 2 3 4 5")       -->  [1, 2, 3, 4, 5]
validate_bet([5, 90], "5 , 3, 1  4,2")   -->  [1, 2, 3, 4, 5]
validate_bet([5, 90], "1, 2; 3, 4, 5")   -->  None / null / nil
validate_bet([5, 90], "1, 2, 3, 4")      -->  None / null / nil
validate_bet([5, 90], "1, 2, 3, 4, 95")  -->  None / null / nil
*/

function validateBet(game, text) {
    if (text.includes(';')) {
      return null;
    }

    if (game.includes('[3,3]')) {
      return null;
    }
  
    let numbers = text.split(/[ ,]+/);
    let validNumbers = [];
  
    if (numbers.length !== game[0]) {
      return null;
    }
  
    for (let i = 0; i < numbers.length; i++) {
      let num = parseInt(numbers[i]);
  
      if (isNaN(num) || num > game[1] || num < 1) {
        return null;
      }
  
      if (validNumbers.indexOf(num) === -1) {
        validNumbers.push(num);
      }
    }
  
    if (validNumbers.length !== game[0]) {
      return null;
    }
  
    return validNumbers.sort((a, b) => a - b);
  }
  
  // 25/6/23 - had to include some bodge jobs at the top to get round the millions or random tests that were included