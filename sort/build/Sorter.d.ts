export declare abstract class Sorter {
    sort(): void;
    abstract readonly length: number;
    abstract compare(currentIndex: number, nextNumber: number): boolean;
    abstract swap(currentIndex: number, nextIndex: number): void;
}
