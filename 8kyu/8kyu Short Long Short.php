<!-- Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

Hint for R users:

The length of string is not always the same as the number of characters
For example: (Input1, Input2) --> output

("1", "22") --> "1221"
("22", "1") --> "1221" -->

function shortLongShort(string $s1, string $s2): string
{
    // Check the lengths of the two strings
    $len1 = strlen($s1);
    $len2 = strlen($s2);

    // Determine which string is shorter and which is longer
    if ($len1 < $len2) {
        $shorter = $s1;
        $longer = $s2;
    } else {
        $shorter = $s2;
        $longer = $s1;
    }

    // Concatenate the shorter, longer, and shorter strings
    return $shorter . $longer . $shorter;
}

// 24/8/23 - learning PHOP syntax