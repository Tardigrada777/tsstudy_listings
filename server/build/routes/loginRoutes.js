"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AppRouter_1 = require("../AppRouter");
var router = AppRouter_1.AppRouter.getInstance();
exports.router = router;
function requireAuth(req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.status(403);
    res.send('Not permitted');
}
exports.requireAuth = requireAuth;
