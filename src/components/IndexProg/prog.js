import html from "./prog.htm"
import { Ref, init } from "../../../ben/ben"
let { el, mod } = init(html)


function bind() {
    let progSelect = mod.init("prog")
    // console.log(progSelect)
    let showP = Ref(0, (value, old) => {
        let progCards = mod.init("prog-cards")
        // progCards.dom.scrollTo({ left: value * progCards.dom.scrollWidth / 3, behavior: 'smooth' })
        progCards.css("transform", `translateX(-${value * progCards.dom.scrollWidth / 3}px)`)
        progSelect[old].attr("className", "prog-select-item")
        progSelect[value].attr("className", "prog-select-item active")
    }
    )
    progSelect.each((select, index) => {
        select.on("click", () => {
            showP.value = index
        })
    })
    return el
}
export default { bind }