import { Sorter } from './Sorter';
export declare class NumbersCollection extends Sorter {
    data: number[];
    constructor(data: number[]);
    swap(currentIndex: number, nextIndex: number): void;
    compare(currentIndex: number, nextIndex: number): boolean;
    readonly length: number;
}
