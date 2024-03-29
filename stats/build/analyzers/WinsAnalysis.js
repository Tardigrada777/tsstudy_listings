"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var matchResult_1 = require("../matchResult");
var WinsAnalysis = /** @class */ (function () {
    function WinsAnalysis(team) {
        this.team = team;
    }
    WinsAnalysis.prototype.run = function (matches) {
        var wins = 0;
        for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
            var match = matches_1[_i];
            if (match[1] === this.team && match[5] === matchResult_1.MatchResult.HomeWin)
                wins++;
            if (match[2] === this.team && match[5] === matchResult_1.MatchResult.AwayWin)
                wins++;
        }
        return this.team + " won " + wins + " games";
    };
    return WinsAnalysis;
}());
exports.WinsAnalysis = WinsAnalysis;
