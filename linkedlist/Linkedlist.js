// Simple implemenation for a Singly Linked List in JavaScript

class Node {
  constructor(data, next = null) {
    (this.data = data), (this.next = next);
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    let node = new Node(data);
    node.next = this.head;
    this.head = node;
    return this.head;
  }

  insertLast(data) {
    let node = new Node(data);

    // check if list is empty
    if (!this.head) {
      this.head = node;
      return this.head;
    }

    let tail = this.head;
    while (tail.next !== null) {
      tail = tail.next;
    }
    tail.next = node;
    return this.head;
  }
}
