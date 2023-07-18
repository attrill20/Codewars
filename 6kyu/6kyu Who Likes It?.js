/* You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
Note: For 4 or more names, the number in "and 2 others" simply increases.
*/

function likes(names) {
    // if empty array, return "no one likes this"
    // if just one name, return return "name likes this"
    // if 2 people, return "name and name like this"
    // if 3 people, return "name, name and name like this"
    // if 4 or more people, return 'name, name and 'amount -2' others like this"

    if (names.length == 0) {
        return "no one likes this"
    } if (names.length == 1) {
        return names[0] + " likes this"
    } if (names.length == 2) {
        return names[0] + " and " + names[1] + " like this"
    } if (names.length == 3) {
        return names[0] + ", " + names[1] + " and " + names[2] + " like this"
    } 
    return names[0] + ", " + names[1] + " and " + (names.length - 2) + " others like this";
  }

  // 1/6/23 - completed solo, with own logic Thursday evening

  function likes(names) {
    names = names || [];
    switch(names.length){
      case 0: return 'no one likes this'; break;
      case 1: return names[0] + ' likes this'; break;
      case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
      case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
      default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
    }
  }

  // should probably use switch / case instead