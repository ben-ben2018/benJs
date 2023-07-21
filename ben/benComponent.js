function createComponent(componentRoot, tagName) {
    class component extends HTMLElement {
        constructor() {
            super();
            const appendBind = (b) => this.append(b());
            let bind = componentRoot.bind
            console.log(bind.async)
            if (bind.async) {
                setTimeout(() => appendBind(bind), 500)
            } else {
                appendBind(bind)
            }
        }
    }
    tagName.substr(0, 2) == "b-" ? null : tagName = "b-" + tagName
    window.customElements.define(tagName, component);
}
export { createComponent }