function createComponent(componentRoot, tagName) {
    class component extends HTMLElement {
        constructor() {
            super();
            let el = document.createElement('div');
            el.innerHTML = componentRoot.html
            componentRoot.bind(el)
            this.append(el);
        }
    }
    tagName.substr(0, 2) == "b-" ? null : tagName = "b-" + tagName
    window.customElements.define(tagName, component);
}
export { createComponent }