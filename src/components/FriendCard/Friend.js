import html from "./Friend.htm"
import { Ref, init } from "../../../ben/ben"
let { el, mod } = init(html)

function bind() {
    return el
}
bind.async = true
export default { bind }