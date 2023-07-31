import html from "./milestone.htm"
import "./milestone.css"
import { Ref, init } from "../../../ben/ben"
let { mod, bind } = init(html)
bind(() => {
    let milestoneInfoText = mod.init("milestoneInfoText")
    mod.init("showMore").on("click", () => {
        milestoneInfoText.css("height", "unset").attr("className", '');
        mod.init("showMore").css("display", "none");
        console.log(mod.init("hideMilestone"))
        mod.init("hideMilestone").css("display", "block")
    })
})
export default { bind }