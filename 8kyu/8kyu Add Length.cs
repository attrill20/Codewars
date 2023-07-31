/* What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

Example(Input --> Output)

"apple ban" --> ["apple 5", "ban 3"]
"you will win" -->["you 3", "will 4", "win 3"]
Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

Note: String will have at least one element; words will always be separated by a space.*/

public class Kata
{
  public static string[] AddLength(string str)
  {
    // work out how to count the length of a string in C#
    // loop through each word
    // count and push to new array with length int
    // return an array with "original word + length int"



        // Split the input string into an array of words
        string[] words = str.Split(' ');

        // Create a new array to store the words with their lengths
        string[] wordsWithLength = new string[words.Length];

        // Loop through each word and append its length to the word itself
        for (int i = 0; i < words.Length; i++)
        {
            wordsWithLength[i] = $"{words[i]} {words[i].Length}";
        }

        // Return the new array
        return wordsWithLength;

  }
}

// 31/7/23 - first kata I've solved using C#! Had to look up a lot of this syntax, but satisfying when worked!

using System.Linq;
public class Kata
{
  public static string[] AddLength(string str)
    => str.Split(' ').Select(e=> $"{e} {e.Length}").ToArray();
}

// Neater solution from the submissions