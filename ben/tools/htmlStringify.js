function astToHtml(domTree) {
    if (domTree.type == 3) {
        return domTree.text
    }
    let attrs = domTree.attrs
    let openTag =
        `<${domTree.tag}${attrs && attrs.length ? (" " + attrs.map((attr) => `${attr.name}${attr.value ? '="' + attr.value + '"' : ""}`).join(" ")) : ""}>`
    if (domTree.children) {
        openTag += domTree.children.map((d) => {
            return astToHtml(d)
        }).join("")
    }
    openTag += `</${domTree.tag}>`
    return openTag
}
module.exports = astToHtml