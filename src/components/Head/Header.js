import html from "./Header.htm"
import close from "./close.svg"
import menu from "./menu.svg"
import { Ref, init } from "../../../ben/ben"

let { el, mod } = init(html)

function bind() {
    let menuDom = mod.init("menu"), mask = mod.init("mask")
    mod.init("call").on("click", () => {
        console.log(8898)
        let callArea = mod.init("callArea")
        callArea.css("display", "flex")
        setTimeout(() => {
            callArea.css("display", "none")
        }, 2e3)
    })
    let showP = Ref(false, (value) => {
        mask.css("display", value ? "block" : "none");
        mod.init("fixedMenu").css("height", value ? "25.5rem" : "0rem");

        menuDom.attr("src", value ? close : menu)
    }
    )
    menuDom.on("click", () => {
        showP.value = !showP.value
    })
    mask.on("click", () => {
        showP.value = !showP.value
    })
    return el
}
bind.async = true
export default { bind }