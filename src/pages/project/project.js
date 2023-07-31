import "./project.css"
import html from "./project.html"
import Pro from "../../../src/components/projectCard/pro"
import { createComponent } from "../../../ben/benComponent"
import { Ref, init, nextTick } from "../../../ben/ben"

let { mod, el } = init(html)
let ps = document.querySelectorAll("[ref='page']"), ops = document.querySelectorAll(".pro-select-option")
function activePage(index) {
    ps[index].style.display = "block"
    ops[index].className = "pro-select-option pro-select-option-active"
}
let current = Ref(0, (value, old) => {
    ps[old].style.display = "none"
    ops[old].className = "pro-select-option"
    activePage(value)
})
for (let i = 0; i < 3; i++) {
    document.querySelector(`[ref=sele${i}]`).addEventListener('click', () => current.value = i)
}
nextTick(() => {
    console.log(location.hash)
    current.value = 0;
    switch (location.hash) {
        case "#0": current.value = 0; activePage(0); break;
        case "#1": current.value = 1; activePage(1); break;
        case "#2": current.value = 2; activePage(2); break;
    }
})

createComponent(Pro, 'pro')