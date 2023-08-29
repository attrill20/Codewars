<!-- /* Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty. */ -->

function smallestInteger ($arr) {
    // Initialize the smallest integer to the first element of the array
    $smallest = $arr[0];

    // Iterate through the array starting from the second element
    for ($i = 1; $i < count($arr); $i++) {
        // If the current element is smaller than the smallest found so far, update the smallest
        if ($arr[$i] < $smallest) {
            $smallest = $arr[$i];
        }
    }

    return $smallest;
}

<!-- 29/8/23 -->

function smallestInteger ($arr) {
    return min($arr);
}

<!-- // much neater -->