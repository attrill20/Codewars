/*A hero is on his way to the castle to complete his mission. 
However, he's been told that the castle is surrounded with a couple of powerful dragons! 
each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. 
Assuming he's gonna grab a specific given number of bullets and move forward to fight 
another specific given number of dragons, will he survive?

Return true if yes, false otherwise :)*/

function hero(bullets, dragons){
    // check bullets is at least dragons * 2
    // return true if higher
    // return false if lower

if (bullets >= dragons*2){
    return true;
} else {
    return false;
}
    }

// Completed on 3/5/23 with Lucy and Dan

function hero(bullets, dragons){
    return bullets >= dragons * 2
  }

  // A smoother way of returning true or false