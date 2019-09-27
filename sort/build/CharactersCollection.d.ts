import { Sorter } from './Sorter';
export declare class CharactersCollection extends Sorter {
    data: string;
    constructor(data: string);
    readonly length: number;
    compare(currentIndex: number, nextIndex: number): boolean;
    swap(currentIndex: number, nextIndex: number): void;
}
