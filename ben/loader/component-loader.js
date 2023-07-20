const parse = require("../tools/htmlParse")
const stringify = require("../tools/htmlStringify")
module.exports = function (source) {
    let ast = parse(source)
    // console.log(JSON.stringify(ast))

    return stringify(ast)
}