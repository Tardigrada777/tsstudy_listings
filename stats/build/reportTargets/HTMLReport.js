"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var HTMLReport = /** @class */ (function () {
    function HTMLReport() {
    }
    HTMLReport.prototype.print = function (report) {
        var html = /*html*/ "\n      <html>\n        <body>\n          <h1>Analysis output</h1>\n          <div> " + report + " </div>\n        </body>\n      </html>\n    ";
        fs_1.default.writeFileSync('report.html', html);
    };
    return HTMLReport;
}());
exports.HTMLReport = HTMLReport;
