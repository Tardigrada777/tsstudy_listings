import { Sorter } from './Sorter';

export class CharactersCollection extends Sorter {
  constructor(public data: string) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(currentIndex: number, nextIndex: number): boolean {
    const currentChar = this.data[currentIndex].toLowerCase();
    const nextChar = this.data[nextIndex].toLowerCase();
    return currentChar > nextChar;
  }
  swap(currentIndex: number, nextIndex: number): void {
    const characters = this.data.split('');
    const temp = characters[currentIndex];
    characters[currentIndex] = characters[nextIndex];
    characters[nextIndex] = temp;
    this.data = characters.join('');
  }
}
