class Node {
  constructor(data = null, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.size = 0;
    this.head = null;
  }
  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }

    ++this.size;
  }

  prepend(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    ++this.size;
  }

  getSize() {
    return this.size;
  }
  getHead() {
    return this.head.data;
  }

  getLast() {
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    return current.data;
  }

  getAtIndex(index) {
    if (this.size === 0) return;
    let count = 0;
    let current = this.head;
    while (current && index > count) {
      current = current.next;
      ++count;
    }
    return current.data ? current.data : undefined;
  }
  popLast() {
    if (this.size === 0) {
      return;
    } else if (this.size === 1) {
      this.head = null;
      this.size = 0;
    } else {
      let current = this.head;
      let previous;
      while (current.next) {
        previous = current;
        current = current.next;
      }
      previous.next = null;
      --this.size;
    }
  }

  contains(data) {
    let current = this.head;
    while (current && current.data !== data) {
      current = current.next;
    }
    return current ? true : false;
  }
  finds(data) {
    let current = this.head;
    let index = 0;
    while (current && current.data !== data) {
      current = current.next;
      ++index;
    }
    return current ? index : current;
  }

  toString() {
    let current = this.head;
    const arr = [];
    while (current) {
      arr.push(current.data);
      current = current.next;
    }
    return arr.map((data) => `(${data})`).join(" -> ") + " -> null";
  }

  insertAt(value, index) {
    if (index === 0) {
      this.prepend(value);
      return;
    }
    if (index > this.size) {
      return;
    }
    let current = this.head;
    let previous;
    let count = 0;
    while (current && index > count) {
      previous = current;
      current = current.next;
      count++;
    }
    const newNode = new Node(value, current);
    previous.next = newNode;
    ++this.size;
  }

  removeHead() {
    let current = this.head.next;
    this.head = current;
    --this.size;
  }

  removeAt(index) {
    if (index > this.size - 1) {
      return;
    }
    if (index === 0) {
      this.removeHead();
      return;
    }
    let current = this.head;
    let previous;
    let count = 0;
    while (current && index > count) {
      previous = current;
      current = current.next;
      count++;
    }
    previous.next = current.next;
    --this.size;
  }
}

const ll = new LinkedList();

ll.prepend("test");
ll.append("araba");
ll.append("ev");
ll.append("yol");
ll.removeAt(1);

console.log(ll.toString());
