import "./index.css"
import html from "./index.html"
import { Ref, init } from "../../../ben/ben"
import { createComponent } from "../../../ben/benComponent"
import FrendCard from "../../../src/components/FriendCard/Friend"
import About from "../../../src/components/IndexAbout/about"
import Prog from "../../../src/components/IndexProg/prog"
import Contact from "../../../src/components/Contact/contact"
init(html)


createComponent(FrendCard, 'friend')
createComponent(About, 'about')
createComponent(Prog, 'prog')
createComponent(Contact, 'contact')