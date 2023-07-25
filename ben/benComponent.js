function createComponent(componentRoot, tagName) {
    class component extends HTMLElement {
        constructor() {
            super();
            this.render()
        }
        render() {
            let bind = componentRoot.bind
            let el = bind(); el.attrs = this.attributes;
            const appendBind = (b) => { this.append(el) };
            if (bind.async) {
                setTimeout(() => appendBind(bind), Math.random() * 200)
            } else {
                appendBind(bind)
            }
        }
    }
    tagName.substr(0, 2) == "b-" ? null : tagName = "b-" + tagName
    customElements.define(tagName, component);
}
export { createComponent }