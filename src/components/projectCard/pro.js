import html from "./pro.htm"
import { Ref, init, nextTick, reRender } from "../../../ben/ben"
let v = {
    title: "",
    desc: "",
    img: ""
}
let { mod, el } = init(html, v)
function bind() {
    nextTick(() => {
        mod.init('title').attr("innerHTML", el.attrs.title.value);
        mod.init('desc').attr("innerHTML", el.attrs.desc.value);
        mod.init('img').attr("src", require("" + el.attrs.img.value))
    })


    return el
}

bind.async = true
export default { bind }