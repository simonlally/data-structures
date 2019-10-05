const LinkedList = require("./linkedlist/Linkedlist");

var linkedList = new LinkedList();
linkedList.insertFirst("y");
linkedList.insertLast("x");
console.log(linkedList);
console.log("*******************");
linkedList.deleteLast();

console.log(linkedList);
