import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

// Numbers collection for sorting
const numbers = new NumbersCollection([0, -5, 10, 1, 0.5]);

// String for sorting
// const str = new CharactersCollection('gfAq');

// LinkedList
const ll = new LinkedList();
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
