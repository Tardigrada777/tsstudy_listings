import { Sorter } from './Sorter';

export class NumbersCollection extends Sorter {
  constructor(public data: number[]) {
    super();
  }
  swap(currentIndex: number, nextIndex: number): void {
    const temp = this.data[currentIndex];
    this.data[currentIndex] = this.data[nextIndex];
    this.data[nextIndex] = temp;
  }
  compare(currentIndex: number, nextIndex: number): boolean {
    return this.data[currentIndex] > this.data[nextIndex];
  }
  get length(): number {
    return this.data.length;
  }
}
