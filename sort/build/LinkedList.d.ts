import { Sorter } from './Sorter';
declare class Node {
    data: number;
    next: Node | null;
    constructor(data: number);
}
export declare class LinkedList extends Sorter {
    head: Node | null;
    add(data: number): void;
    readonly length: number;
    at(index: number): Node;
    compare(currentIndex: number, nextIndex: number): boolean;
    swap(currentIndex: number, nextIndex: number): void;
    print(): void;
}
export {};
