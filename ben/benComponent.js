function createComponent(componentRoot, tagName) {
    class component extends HTMLElement {
        constructor() {
            super();
            this.append(componentRoot.bind());
        }
    }
    tagName.substr(0, 2) == "b-" ? null : tagName = "b-" + tagName
    window.customElements.define(tagName, component);
}
export { createComponent }