import html from "./test.html"
import { Ref, init } from "../../../ben/ben"
import p1 from "../../components/p1/index"
import { createComponent } from "ben/benComponent"

console.log(p1)

createComponent(p1, "b-pppp")

const { bind } = init(html)

export default { bind }