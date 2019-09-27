import fs from 'fs';

import { OutputTarget } from '../Summary';

export class HTMLReport implements OutputTarget {
  print(report: string): void {
    const html = /*html*/ `
      <html>
        <body>
          <h1>Analysis output</h1>
          <div> ${report} </div>
        </body>
      </html>
    `;
    fs.writeFileSync('report.html', html);
  }
}
