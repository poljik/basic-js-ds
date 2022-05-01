const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  root() {
    return this.head;
  }

  add(data) {
    if (this.length === 0) {
      this.head = new Node(data);
    } else {
      let current = this.head;
      while(current.next) {
        current = current.next;
      }
      current.next = new Node(data);
    }
    this.length++;
  }

  has(data) {
    if (this.length == 0) {
      return null;
    } else {
      let current = this.head;
      for (let index = 0; index < this.length; index++) {
        if (current.data == data) {
          return true;
        }
        current = current.next;
      }
      return false;
    }
  }

  find(data) {
    if (this.length == 0) {
      return null;
    } else {
      let current = this.head;
      for (let index = 0; index < this.length; index++) {
        if (current.data == data) {
          return current;
        }
        current = current.next;
      }
      return null;
    }
  }

  remove(data) {
    if (this.length == 0) {
      return null;
    } else {
      let current = this.head;
      let prev = null;
      for (let index = 0; index < this.length; index++) {
        if (current.data == data) {
          this.length--;
          if (prev == null) {
            this.head = current.next;
            return false;
          }
          prev.next = current.next;
          return true;
        }
        prev = current;
        current = current.next;
      }
      return false;
    }
  }

  min() {
    if (this.length == 0) {
      return null;
    } else {
      let current = this.head;
      let min = current.data;
      for (let index = 0; index < this.length; index++) {
        min = current.data < min ? current.data : min;
        current = current.next;
      }
      return min;
    }
  }

  max() {
    if (this.length == 0) {
      return null;
    } else {
      let current = this.head;
      let max = current.data;
      for (let index = 0; index < this.length; index++) {
        max = current.data > max ? current.data : max;
        current = current.next;
      }
      return max;
    }
  }
}

const tree = new BinarySearchTree();
tree.add(9);
tree.add(14);
tree.add(2);
tree.add(6);
tree.add(128);
tree.add(8);
tree.add(31);
tree.add(54);
tree.add(1);
tree.remove(14);
tree.remove(8);
tree.remove(9);

tree.has(14);

module.exports = {
  BinarySearchTree
};