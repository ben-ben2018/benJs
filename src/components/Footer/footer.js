import html from "./Footer.htm"
import { Ref, init } from "../../../ben/ben"
import "./footer.css"

let { el, mod } = init(html)

function bind() {
    let menuDom = mod.init("menu")
    let showP = Ref(false, (value) => {
        mod.init("mask").css("display", value ? "block" : "none")
        mod.init("fixedMenu").css("height", value ? "25.5rem" : "0rem")
        menuDom.attr("src", value ? close : menu)
    }
    )
    menuDom.on("click", () => {
        showP.value = !showP.value
    })
    return el
}
bind.async = true
export default { bind }