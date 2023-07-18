import html from "./Header.htm"
import close from "./close.svg"
import menu from "./menu.svg"
import { Ref, init } from "../../../ben/ben"

let { el, mod } = init(html)

function bind() {
    let menuDom = mod.init("menu")
    let showP = Ref(false, (value) => {
        mod.init("submenu").css("display", value ? "block" : "none")
        menuDom.attr("src", value ? close : menu)
    }
    )
    menuDom.on("click", () => {
        showP.value = !showP.value
    })
    return el
}
export default { bind }