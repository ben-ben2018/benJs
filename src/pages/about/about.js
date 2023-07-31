import "./about.css"
import About from "../../components/AboutDesc/about"
import Milestone from "../../components/Milestone/milestone"
import { createComponent } from "../../../ben/benComponent"
import html from "./about.html"
import { Ref, init } from "../../../ben/ben"
import Honor from "../../../src/components/Honor/honor"

init(html)
createComponent(About, 'about')
createComponent(Milestone, 'milestone')
createComponent(Honor, 'honor')