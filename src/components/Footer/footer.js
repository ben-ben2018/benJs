import html from "./Footer.htm"
import { Ref, init } from "../../../ben/ben"
import Contact from "../Contact/contact"
import { createComponent } from "../../../ben/benComponent"
import "./footer.css"

createComponent(Contact, 'contact')
let { el, mod } = init(html)

function bind() {
    let mask = mod.init("mask"), qrCode = mod.init("qrCode")
    let showQrCode = Ref(0, (value) => {
        if (value == 0) {
            mask.css("display", "none")
            return
        }
        if (value > 0) {
            mask.css("display", "flex")
            if (value == 1) {
                qrCode.attr("src", require("./wechat.jpg"))
            } else {
                qrCode.attr("src", require("./weibo.png"))
            }
            return
        }
    })
    function showQr(num) {
        if (showQrCode.value == 0) {
            showQrCode.value = num
        } else {
            showQrCode.value = 0
        }
    }
    mod.init("contact").on("click", () => showQr(1))
    mask.on("click", () => showQr(0), false)

    mod.init("wx").on("click", () => showQr(1))
    mod.init("wb").on("click", () => showQr(2))
    return el
}
bind.async = true
export default { bind }