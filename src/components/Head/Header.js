import html from "./Header.htm"
import close from "./close.svg"
import menu from "./menu.svg"
import ben from "../../../ben/ben"


function bind(el) {
    const { refDom, Ref } = ben(el)
    let menuDom = refDom("menu")

    let showP = Ref(false, (value) => {
        refDom("submenu").css("display", value ? "block" : "none")
        menuDom.attr("src", value ? close : menu)
    }
    )
    menuDom.on("click", () => {
        showP.value = !showP.value
    })
}
export default { bind, html }