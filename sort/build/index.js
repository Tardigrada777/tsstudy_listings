"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var LinkedList_1 = require("./LinkedList");
// Numbers collection for sorting
var numbers = new NumbersCollection_1.NumbersCollection([0, -5, 10, 1, 0.5]);
// String for sorting
// const str = new CharactersCollection('gfAq');
// LinkedList
var ll = new LinkedList_1.LinkedList();
ll.add(500);
// ll.add(-10);
ll.add(-3);
ll.add(4);
// ll.add(-503);
// numbers.sort();
ll.sort();
console.clear();
// console.log(numbers);
ll.print();
// ll.print();
// console.clear();
// ll.print();
// console.log('Sorted string -->', str.data);
