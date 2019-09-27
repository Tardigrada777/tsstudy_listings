import { Sorter } from './Sorter';

class Node {
  next: Node | null = null;
  constructor(public data: number) {}
}

export class LinkedList extends Sorter {
  head: Node | null = null;

  // push one element with data to the end of list
  add(data: number): void {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      // return;
    } else {
      let tail: Node | null = this.head;
      while (tail.next) {
        tail = tail.next;
      }

      tail.next = node;
    }
  }

  // get length of list
  get length(): number {
    if (!this.head) return 0;

    let tail: Node = this.head;
    let length: number = 1;
    while (tail.next) {
      length++;
      tail = tail.next;
    }
    return length;
  }

  // returns node at specific index
  at(index: number): Node {
    if (!this.head) throw new Error('Index out of bounds');

    let counter: number = 0;
    let node = this.head;
    while (node.next) {
      if (counter === index) return node;
      counter++;
      node = node.next;
    }
    if (counter === index) return node;
    throw new Error('Index out of bounds');
  }

  // compare data property of two nodes
  compare(currentIndex: number, nextIndex: number): boolean {
    if (!this.head) throw new Error('List is empty');
    return this.at(currentIndex).data > this.at(nextIndex).data;
  }

  // swap two nodes
  swap(currentIndex: number, nextIndex: number): void {
    const currentNode = this.at(currentIndex);
    const nextNode = this.at(nextIndex);

    const temp = currentNode.data;
    currentNode.data = nextNode.data;
    nextNode.data = temp;
  }

  // print all items in LinkedList
  print(): void {
    if (!this.head) {
      console.log([]);
      return;
    }

    let result = [];
    let node = this.head;
    while (node.next) {
      result.push(node.data);
      node = node.next;
    }
    result.push(node.data);
    console.log(result);
  }
}
