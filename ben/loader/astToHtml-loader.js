const parse = require("../tools/htmlParse")
const stringify = require("../tools/htmlStringify")
module.exports = function (source, map, ast) {

    return stringify(ast);
}