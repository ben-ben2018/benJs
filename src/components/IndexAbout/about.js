import html from "./about.htm"
import "./about.css"
import ben from "../../../ben/ben"

function bind(el) {
    const { refDom, Ref } = ben(el)
    let aboutInfoText = refDom("aboutInfoText")

    refDom("showMore").on("click", () => {
        aboutInfoText.css("height", "35.875rem").css("-webkit-line-clamp", 'unset')
        refDom("aboutInfo").attr("className", 'about-info about-info-show')
        refDom("showMore").css("display", "none")
    })

}
export default { bind, html }