import "./index.css"
import html from "./index.html"
import { Ref, init } from "../../../ben/ben"
import { createComponent } from "../../../ben/benComponent"
import FrendCard from "../../../src/components/FriendCard/Friend"

init(html)


// import About from "../../../src/components/IndexAbout/about"

createComponent(FrendCard, 'friend')
// createComponent(About, 'about')