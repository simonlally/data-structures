function Stack() {
  this.data = [];
  this.top = 0;
  this.push = push;
  this.pop = pop;
  this.peek = peek;
  this.clear = clear;
  this.length = length;
}

function push(e) {
  this.data[this.top++] = e;
}

function pop() {
  return this.data[--this.top];
}

function peek() {
  return this.data[this.top - 1];
}

function length() {
  return this.top();
}

function clear() {
  this.top = 0;
  this.data.length = 0;
}

var stack = new Stack();

stack.push("ok!");
console.log(stack.peek());
