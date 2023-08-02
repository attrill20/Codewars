/* Issue
Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

The pipes connecting your level's stages together need to be fixed before you receive any more complaints.

The pipes are correct when each pipe after the first is 1 more than the previous one.

Task
Given the a list of unique numbers sorted in ascending order, return a new list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).

Example
Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8
*/

using System.Collections.Generic;
using System.Linq;

// take the list 
// take the max and min
// ensure that it is n+1 all the way from min to max
// create a for loop that cycles through from min to max

public class Fixer
{
  public static List<int> PipeFix(List<int> numbers)
  {
        int min = numbers[0];
        int max = numbers[numbers.Count - 1];

        List<int> fixedPipes = new List<int>();

        for (int i = min; i <= max; i++)
        {
            fixedPipes.Add(i);
        }

        return fixedPipes;
  }
}

// 2/8/23 - completed as part of C# practice - created two variables (min, max), create new list, cycle from min to max adding 1 each time and push to new List. Return list