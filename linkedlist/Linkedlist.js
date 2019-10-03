// Simple implemenation for a Singly Linked List in JavaScript

class Node {
  constructor(data, next = null) {
    (this.data = data), (this.next = next);
  }
}

module.exports = class LinkedList {
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

  insertAt(index, data) {
    // if there is no head list is empty, set head to node being added
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    // add to beginning of the list, set next to head
    if (index === 0) {
      this.head = new Node(data, this.head);
    } else {
      let count = 0;
      let node = this.head;
      while (node) {
        if (count === index) {
          return node;
        }
        count++;
        node = node.next;
      }
      return null;
    }
  }
};
