import html from "./prog.htm"
import ben from "../../../ben/ben"


function bind(el) {
    const { refDom, Ref } = ben(el)
    let progSelect = refDom("prog")
    // console.log(progSelect)
    let showP = Ref(0, (value, old) => {
        let progCards = refDom("prog-cards")
        progCards.dom.scrollTo({ left: value * progCards.dom.scrollWidth / 3, behavior: 'smooth' })
        progSelect[old].attr("className", "prog-select-item")
        progSelect[value].attr("className", "prog-select-item active")
    }
    )
    progSelect.each((select, index) => {
        select.on("click", () => {
            showP.value = index
        })
    })
}
export default { bind, html }