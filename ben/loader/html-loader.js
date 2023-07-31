const parse = require("../tools/htmlParse")
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
            head.children.push({ tag: "meta", attrs: [{ name: "name", value: "description" }, { name: "content", value: "力码科技｜让保险经营更简单。力码科技以创新为驱动，信息技术为基础，优化保险产业链成本结构，重塑行业价值，为广大保险经营者提供保险SaaS、产品供应链以及客户成功服务等在内的全链条数字化解决方案，助力合作伙伴降本增效，提升保险服务效率和服务质量，成为保险经营者最信赖的伙伴" }] })
            head.children.push({ tag: "meta", attrs: [{ name: "http-equiv", value: "keywords" }, { name: "content", value: "力码、力码科技、让保险经营更简单、提供全链条数字化服务能力、成为保险经营者最信赖的伙伴" }] })
            head.children.push({ tag: "link", attrs: [{ name: "rel", value: "icon" }, { name: "href", value: "https://lima-cdn.oss-cn-beijing.aliyuncs.com/lima-website/pc/assets/images/limaicon.ico" }] })

        }
    }
    this.callback(null, "", false, ast)
    // return stringify(ast)
    return;
}