const parse = require("../tools/htmlParse")
const stringify = require("../tools/htmlStringify")
module.exports = function (source, map, meta) {
    let ast = parse(source)
    // console.log(JSON.stringify(ast))
    // console.log(map, meta)
    this.callback(null, stringify(ast), map, meta)
    // return stringify(ast)
}