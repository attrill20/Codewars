/* Write a RemoveDuplicates() function which takes a list sorted in increasing order and deletes any duplicate nodes from the list. Ideally, the list should only be traversed once. The head of the resulting list should be returned.

var list = 1 -> 2 -> 3 -> 3 -> 4 -> 4 -> 5 -> null
removeDuplicates(list) === 1 -> 2 -> 3 -> 4 -> 5 -> null
If the passed in list is null/None/nil, simply return null.

Note: Your solution is expected to work on long lists. Recursive solutions may fail due to stack size limitations.

The push() and buildOneTwoThree() functions need not be redefined.*/

function Node(data) {
    this.data = data;
    this.next = null;
  }
  
  function removeDuplicates(head) {
    if (!head) {
      return null; // If the list is empty, return null
    }
  
    const uniqueElements = new Set(); // Hash set to store unique elements (Hash sets don't allow duplicate elements, it will simply ignore duplicates)
    let current = head;
    let previous = null;
  
    while (current) {
      if (uniqueElements.has(current.data)) {
        // If the current node's data is already in the set, it's a duplicate
        // Remove the duplicate node by updating the "next" pointer of the previous node
        previous.next = current.next;
      } else {
        // If the current node's data is not in the set, add it to the set
        uniqueElements.add(current.data);
        // Move the "previous" pointer to the current node for future reference
        previous = current;
      }
      // Move the "current" pointer to the next node in the list
      current = current.next;
    }
  
    return head; // Return the head of the updated list
  }
  
  // 21/7/23 - passed using some help from the docs and Steve to teach me more about linked lists and the power of hashed sets

  function Node(data) {
    this.data = data
    this.next = null
  }
  
  function removeDuplicates(head) {
    for (var node = head; node != null; node = node.next) {
      while (node.next && node.data == node.next.data) {
        node.next = node.next.next
      }
    }
    return head
  }

  // Slightly tidier looking code, but without any notes