import "./news.css"
import html from "./news.html"
import { Ref, init } from "../../../ben/ben"
import { createComponent } from "../../../ben/benComponent"
import News from "../../components/News/news"
init(html)
createComponent(News, 'news')