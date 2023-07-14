/* Given a time in AM/PM format as a string, convert it to military (24-hour) time as a string.

Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock. Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock

Sample Input: 07:05:45PM Sample Output: 19:05:45

Try not to use built in DateTime libraries.

For more information on military time, check the wiki https://en.wikipedia.org/wiki/24-hour_clock#Military_time*/

var getMilitaryTime = function(input) {
    let amPm = input.slice(-2)
    let time = input.slice(0, -2)
    let timeArray = time.split(":")
    if(amPm == "AM" && timeArray[0] == 12){   
        return "00:" + timeArray[1] + ":" + timeArray[2]  
    }
    if(amPm == "PM" && timeArray[0] < 12){
     
      let hour = parseInt(timeArray[0]) + 12;
      console.log(hour)
      return  hour.toString() + ":" + timeArray[1] + ":" + timeArray[2] 
    }
    
    return timeArray[0] + ":" + timeArray[1] + ":" + timeArray[2]
    
   };

   // 14/7/23 - completed with Olga, Paul and Jason in kumospace

    //remove am & pm from number string 
     //filter(store) am or pm somewhere
    // then split on the array?   
    //if it's am - don't change number
    // 12 am - change to 00
    // 12 pm keep it as it is  
    //if it's 1pm  or above add 12
    //(then put ir back together) 
  