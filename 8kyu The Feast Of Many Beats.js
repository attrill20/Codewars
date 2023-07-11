/*All of the animals are having a feast! Each animal is bringing one dish. 
There is just one rule: the dish must start and end with the same letters as the animal's name. 
For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

Write a function feast that takes the animal's name and dish as arguments and returns true or false 
to indicate whether the beast is allowed to bring the dish to the feast.

Assume that beast and dish are always lowercase strings, and that each has at least two letters. 
beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. 
They will not contain numerals.*/

function feast(beast, dish) {
    //take in the beast and the dish
    // write code that checks the first letter of beast 
    // write code that checks the first letter of dish
    // boolean if statement - if they match, return true, 
    // if not return, false

return beast[0] === dish[0] && beast[beast.length -1] === dish[dish.length -1];
    
}

// completed with the help of Michael and Bryony 12/4/23
// discovered that you don't need if statements here, as you are basically just asking it 
// to check if these things match and return true or false automatically