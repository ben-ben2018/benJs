import html from "./contact.htm"
import { Ref, init } from "../../../ben/ben"
let { el, mod } = init(html)
function bind() {
    let svg = mod.init("svg")
    window.addEventListener("scrollend", () => {
        setTimeout(() => { svg.attr("className", "contact contactActive") }, 400)
    })
    window.addEventListener("scroll", () => {
        svg.attr("className", "contact")
    })
    return el
}
bind.async = true
export default { bind }