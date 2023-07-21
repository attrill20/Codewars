/* Write push() and buildOneTwoThree() functions to easily update and initialize linked lists. Try to use the push() function within your buildOneTwoThree() function.

Here's an example of push() usage:

var chained = null
chained = push(chained, 3)
chained = push(chained, 2)
chained = push(chained, 1)
push(chained, 8) === 8 -> 1 -> 2 -> 3 -> null
The push function accepts head and data parameters, where head is either a node object or null/None/nil. Your push implementation should be able to create a new linked list/node when head is null/None/nil.

The buildOneTwoThree function should create and return a linked list with three nodes: 1 -> 2 -> 3 -> null*/

function Node(data) {
    this.data = data;
    this.next = null;
  }
  
  function push(head, data) {
    var newNode = new Node(data);
    newNode.next = head;
    return newNode;
  }
  
  function buildOneTwoThree() {
    var chained = null;
    chained = push(chained, 3);
    chained = push(chained, 2);
    chained = push(chained, 1);
    return chained;
  }

  // 21/7/23 - completed as practice for a tech test about linked lists. Don't still fully understand the final function, but just used the synatx from the problem being setInterval(() => {
    

  function push(head, data) {
  return new Node(data, head);
}

function buildOneTwoThree() {
  return [3, 2, 1].reduce( (head, data) => push(head, data), null );
}

function Node(data, next = null) {
  this.data = data;
  this.next = next;
}

// this answer from the solutions looks better as it uses .reduce within the buildOneTwoThree function

function push(head, data) {
    var node = new Node(data);
    node.next = head;
    return node;
  }
  
  function buildOneTwoThree() {
    return push(push(push(null, 3), 2), 1);
  }
  
  function Node(data) {
    this.data = data;
    this.next = null;
  }

  // or this one too, which is also cleaner