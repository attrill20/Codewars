/* Kevin is noticing his space run out! Write a function that removes the spaces from the values and returns an array showing the space decreasing.
For example, running this function on the array ['i', 'have','no','space'] would produce ['i','ihave','ihaveno','ihavenospace']

*/

function spacey(array){
   // for loop through the array
   // maybe split first?
   // return n, then n+1 etc adding one each time 
   // push to a new array and return it 

const newArr = []
let word = ''

for (i=0; i < array.length; i++) {
    console.log(array[i])
    word = word + array[i];
    newArr.push(word);
}
return newArr;
}

// 23/5/23 completed with Ahia and Jo

function spacey(array){
	let string = ''
	return array.map( (e) => string += e )
}

// neater answer on CodeWars