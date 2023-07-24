/* Linked Lists - Insert Nth

Implement an InsertNth() function (insert_nth() in PHP) which can insert a new node at any index within a list.

InsertNth() is a more general version of the Push() function that we implemented in the first kata listed below. Given a list, an index 'n' in the range 0..length, and a data element, add a new node to the list so that it has the given index. InsertNth() should return the head of the list.

insertNth(1 -> 2 -> 3 -> null, 0, 7) === 7 -> 1 -> 2 -> 3 -> null)
insertNth(1 -> 2 -> 3 -> null, 1, 7) === 1 -> 7 -> 2 -> 3 -> null)
insertNth(1 -> 2 -> 3 -> null, 3, 7) === 1 -> 2 -> 3 -> 7 -> null)
You must throw/raise an exception (ArgumentOutOfRangeException in C#, InvalidArgumentException in PHP) if the index is too large.

The push() and buildOneTwoThree() (build_one_two_three() in PHP) functions do not need to be redefined. The Node class is also preloaded for you in PHP.*/

function Node(data) {
    this.data = data;
    this.next = null;
  }
  
  function insertNth(head, index, data) {
    if (index < 0) {
      throw new Error("Index cannot be negative.");
    }
  
    const newNode = new Node(data);
  
    if (index === 0) {
      newNode.next = head;
      return newNode;
    }
  
    let current = head;
    let previous = null;
    let currentIndex = 0;
  
    while (current) {
      if (currentIndex === index) {
        newNode.next = current;
        previous.next = newNode;
        return head;
      }
  
      previous = current;
      current = current.next;
      currentIndex++;
    }
  
    if (currentIndex === index) {
      previous.next = newNode;
      return head;
    }
  
    throw new Error("Index out of range.");
  }

  // 23/7/23 - completed as part of practice on linked lists

  function Node(data) {
    this.data = data;
    this.next = null;
  }
  
  function insertNth(head, index, data) {
    if (index == 0) {
      return push(head, data);
    }
  
    head.next = insertNth(head.next, index - 1, data);
  
    return head;
  }

  // a better solution from the answers

