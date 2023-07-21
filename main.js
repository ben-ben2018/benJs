import './main.css';
import { createComponent } from "./ben/benComponent"
import Head from "./src/components/Head/Header"
import Foot from "./src/components/Footer/footer"

createComponent(Head, 'header')
createComponent(Foot, 'footer')
function handleSize() {
    let clientWidth = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
    let html_ = document.getElementsByTagName('html')[0];
    html_.style.fontSize = (clientWidth / 750) * 16 + 'px';
}
handleSize()
window.onresize = handleSize
window.onorientationchange = handleSize