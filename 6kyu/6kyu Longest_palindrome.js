/* Longest Palindrome
Find the length of the longest substring in the given string s that is the same in reverse.

As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.

If the length of the input string is 0, the return value must be 0.

Example:
"a" -> 1 
"aab" -> 2  
"abcde" -> 1
"zzbaabcd" -> 4
"" -> 0
*/

function longestPalindrome(s){
    //check for palindromes
    // could loop through checking?

    if (s.length === 0) {
      return 0;
    }
  
    let maxLength = 0;
  
    for (let i = 0; i < s.length; i++) {
      // Expand around i as the center of an odd-length palindrome
      let left = i;
      let right = i;
      while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
      }
      maxLength = Math.max(maxLength, right - left - 1);
  
      // Expand around the gap between i and i+1 as the center of an even-length palindrome
      left = i;
      right = i + 1;
      while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
      }
      maxLength = Math.max(maxLength, right - left - 1);
    }
  
    return maxLength;
  }
  
  // 7/7/23 - with a bit of help from Steve

  longestPalindrome=function(s){
    var longest = 0;
    var length = s.length;
  
    for(var i=0; i < length; i++){
      for(var j = i+1; j <= length; j++) {
        var str = s.slice(i,j);
        var l = str.length
        if(isPalindrome(str) && longest < l) {
          longest = l;
        }
      }
    }
    return longest;
  }
  
  function isPalindrome(s) {
    var arr = s.split("");
    return s == arr.reverse().join("");
  }

  // nice answer