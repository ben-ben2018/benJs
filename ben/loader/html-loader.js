const parse = require("../tools/htmlParse")
const stringify = require("../tools/htmlStringify")
module.exports = function (source) {
    let ast = parse(source)
    if (ast.tag = "html") {
        let head = ast.children.find((t) => t.tag == 'head')
        if (head) {
            head.children.push({ tag: "meta", attrs: [{ name: "charset", value: "UTF-8" }] })
            head.children.push({ tag: "meta", attrs: [{ name: "http-equiv", value: "X-UA-Compatible" }, { name: "content", value: "IE=edge" }] })
            head.children.push({ tag: "meta", attrs: [{ name: "name", value: "viewport" }, { name: "content", value: "width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" }] })
            head.children.push({ tag: "meta", attrs: [{ name: "name", value: "format-detection" }, { name: "content", value: "telephone=no" }] })
            head.children.push({ tag: "meta", attrs: [{ name: "name", value: "format-detection" }, { name: "content", value: "email=no" }] })
            head.children.push({ tag: "meta", attrs: [{ name: "name", value: "apple-mobile-web-app-capable" }, { name: "content", calue: "yes" }] })
            head.children.push({ tag: "meta", attrs: [{ name: "name", value: "apple-mobile-web-app-status-bar-style" }, { name: "content", value: "black" }] })
            head.children.push({ tag: "meta", attrs: [{ name: "http-equiv", value: "Pragma" }, { name: "content", value: "no-cache" }] })
            // console.log(head.children)
        }
    }
    return stringify(ast)
}