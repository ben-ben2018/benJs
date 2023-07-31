function createComponent(componentRoot, tagName) {
    class component extends HTMLElement {
        constructor() {
            super();
            this.render()
        }
        render() {
            let bind = componentRoot.bind
            let el = bind(); el.attrs = this.attributes; el.reBind = this.reBind
            const appendBind = () => { this.append(el) };
            if (bind.async) {
                setTimeout(() => appendBind(bind), Math.random() * 200)
            } else {
                appendBind(bind)
            }
        }
        reBind(el) {
            return new Promise((resolve) => {
                let bind = componentRoot.bind
                el.attrs = this.attributes; el.reBind = this.reBind
                const appendBind = () => { this.innerHTML = ""; this.append(el); bind(); resolve() };
                if (bind.async) {
                    setTimeout(() => appendBind(), Math.random() * 200)
                } else {
                    appendBind()
                }
            })
        }
    }
    tagName.substr(0, 2) == "b-" ? null : tagName = "b-" + tagName
    customElements.define(tagName, component);
}
export { createComponent }