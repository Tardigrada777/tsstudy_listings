import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

const source = MatchReader.fromCsv('football.csv');
source.load();

const sum = Summary.winsAnalysisWithHtmlReport('Everton');
sum.buildAndPrintReport(source.matches);
