/* Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

function getCount(str) {
    let count = 0
for (let i = 0; i < str.length; i++ ) {
    if (str[i] === 'a') {
        count++;
    }
    if (str[i] === 'e') {
        count++;
    }
    if (str[i] === 'i') {
        count++;
    }
    if (str[i] === 'o') {
        count++;
    }
    if (str[i] === 'u') {
        count++;
    }
}
return count;
}

// completed on 17/5/23 with Jordan and Hung

function getCount(str) {
    let count = 0
for (let i = 0; i < str.length; i++ ) {
    if (str[i] === 'a' | str[i] === 'e' | str[i] === 'i' | str[i] === 'o' | str[i] === 'u') {
        count++;
    }
}
return count;
}

// rephrased it to this as much neater