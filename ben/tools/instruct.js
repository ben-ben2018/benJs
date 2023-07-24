const deepcopy = require("deepcopy")
function $for(element, v) {
    let vs = v.trim().match(/(.*?)\sin\s(.*?)$/)
    if (!vs) return
    let keys = eval(vs[2])
    Object.keys(keys).forEach((key) => {
        let tempParent = element.parent, item = keys[key]
        element.parent = undefined
        let newNode = deepcopy(element)
        newNode.attrs.forEach((attrIndex, index) => {
            let attr = newNode.attrs[index]
            if (attr.name[0] == "&") {
                attr.name = attr.name.slice(1)
                attr.value = attr.value.replace(new RegExp(`{${vs[1]}}`, 'g'), item)
                attr.value = attr.value.replace(/{index}/g, index)
            }
            if (attr.name[0] == "$") {
                newNode.attrs[index] = undefined
            }
        })
        tempParent.children.push(newNode)
        element.parent = tempParent
    })
}
