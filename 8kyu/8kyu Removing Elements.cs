/* Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!

*/

            // create new array
            // cycle through the current array
            // add 2 to the loop each time
            // push each alternating item to the array
            // return it

    public static class Kata
{
    public static object[] RemoveEveryOther(object[] arr)
    {
        // Create a new array to store the elements that need to be kept
        object[] resultArr = new object[(arr.Length + 1) / 2];

        // Cycle through the current array and add every other element to the new array
        for (int i = 0, j = 0; i < arr.Length; i += 2, j++)
        {
            resultArr[j] = arr[i];
        }

        // Return the new array
        return resultArr;
    }
}

// 3/8/23 - good practice

using System.Linq;

public static class Kata
{
    public static object[] RemoveEveryOther(object[] arr)
    {
        return arr.Where((e, i) => i%2 == 0).ToArray();
    }
}

// neater answer from solutions