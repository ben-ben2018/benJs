import html from "./about.htm"
import "./about.css"
import { Ref, init } from "../../../ben/ben"
let { el, mod } = init(html)
function bind() {
    let aboutInfoText = mod.init("aboutInfoText")

    mod.init("showMore").on("click", () => {
        aboutInfoText.css("height", "35.875rem").css("-webkit-line-clamp", 'unset')
        mod.init("aboutInfo").attr("className", 'about-info about-info-show')
        mod.init("showMore").css("display", "none")
    })
    return el
}
export default { bind }