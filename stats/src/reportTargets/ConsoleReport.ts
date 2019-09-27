import { OutputTarget } from '../Summary';

export class ConsoleReport implements OutputTarget {
  print(report: string): void {
    console.clear();
    console.log(report);
  }
}
