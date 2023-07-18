/* Write a function that returns a string in which firstname is swapped with last name.

Example(Input --> Output)

"john McClane" --> "McClane john"
*/
function nameShuffler(str){
    // split the word at the 'space'.   Spread? ...   ' ' 
    // separate it 
    // put it back at the front of the word using join?

       let arr = str.split(" ")
       let name = arr[1] + " " + arr[0]
       return name
  }

  // 19/5/23 completed with Hung and Jordan

  function nameSuffle(str){
    return str.split(' ').reverse().join(' ')
  }

  // nicer answer from Codewars