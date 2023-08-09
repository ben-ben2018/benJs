; import html from "./about.htm"
import "./about.css"
import { Ref, init } from "../../../ben/ben"
let { mod, bind } = init(html)
bind(() => {
    let aboutInfoText = mod.init("aboutInfoText")
    mod.init("showMore").on("click", () => {
        aboutInfoText.css("height", window.innerWidth < 300 ? "42rem" : "37rem").css("-webkit-line-clamp", 'unset')
        mod.init("aboutInfo").attr("className", 'about-info about-info-show')
        mod.init("showMore").css("display", "none")
    })
})
export default { bind }