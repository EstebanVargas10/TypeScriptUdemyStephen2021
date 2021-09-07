"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var matches = fs_1["default"].readFileSync('football.cvs', {
    encoding: 'utf-8'
});
console.log(matches);
