"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
var source = MatchReader_1.MatchReader.fromCsv('football.csv');
source.load();
var sum = Summary_1.Summary.winsAnalysisWithHtmlReport('Everton');
sum.buildAndPrintReport(source.matches);
