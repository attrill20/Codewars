/* You received a whatsup message from an unknown number. Could it be from that girl/boy with a foreign accent you met yesterday evening?

Write a simple function to check if the string contains the word hallo in different languages.

These are the languages of the possible people you met the night before:

hello - english
ciao - italian
salut - french
hallo - german
hola - spanish
ahoj - czech republic
czesc - polish
Notes

you can assume the input is a string. to keep this a beginner exercise you don't need to check if the greeting is a subset of word (Hallowen can pass the test)
function should be case insensitive to pass the tests */

function validateHello(greetings) {
    greetings = greetings.toLowerCase().trim();

    if (greetings == 'hello' || greetings == 'ciao' || greetings == 'salut' || greetings == 'hallo' || greetings == 'hola' || greetings == 'ahoj' || greetings == 'czesc') {
        return true
    } else {
        return false
    }
  }

  // this all made sense, but not fully passing the random tests and a lot of complaints about this in the comments!

  function validateHello(greetings) {
    return /(ahoj|ciao|czesc|h[ae]llo|hola|salut)/i.test(greetings)
  }

  // this was the way to do it