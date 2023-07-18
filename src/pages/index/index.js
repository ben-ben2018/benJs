import "./index.css"
import { createComponent } from "../../../ben/benComponent"
import Prog from "../../../src/components/IndexProg/prog"
import About from "../../../src/components/IndexAbout/about"

createComponent(Prog, 'prog')
createComponent(About, 'about')