import html from "./rich.htm"
import "./rich.css"
import { Ref, init } from "../../../ben/ben"
// import Title from "../Title/title"
// import { createComponent } from "../../../ben/benComponent"

let { el, mod } = init(html)

// createComponent(Title, "title")

function bind() {
    let scroll = mod.init("scroll"), steps = mod.init("info-step"), flag = false, start = 0, current = 0
    let now = Ref(0, (value, old) => {
        scroll.css("transform", `translateX(-${value * window.innerWidth}px)`)
        steps[value].attr("className", "evaluate-card-info-step-active")
        steps[old].attr("className", "")
    })
    steps[0].attr("className", "evaluate-card-info-step-active")
    scroll.on("touchstart", (e) => {
        start = e.touches[0].pageX
        flag = true
    })
    function ctrTimer() {
        let timer = setInterval(() => {
            if (now.value < 3) {
                now.value += 1
            } else {
                now.value = 0
            }
        }, 3e3)
        return timer
    }

    let timer = ctrTimer()
    function rectrTimer() {
        clearInterval(timer)
        setTimeout(() => {
            timer = ctrTimer()
        }, 3e3);
    }
    scroll.on("touchmove", (e) => {
        current = e.touches[0].pageX
        //start-current>0 往左滑
        if (flag) {
            // alert(now.value)
            if (now.value < 3 && start - current > 100) {
                now.value += 1
                flag = false
                rectrTimer()
            } else if (now.value > 0 && start - current < -100) {
                now.value -= 1
                flag = false
                rectrTimer()
            }
        }
    })
    return el
}
bind.async = true
export default { bind }