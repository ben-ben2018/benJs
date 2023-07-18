function el(eldom) {
    let unit = {
        on: (d, ...arg) => { d.addEventListener(...arg) },
        css: (d, attr, value) => { d.style[attr] = value },
        attr: (d, attr, value) => { d[attr] = value; },
    }
    function refDom(refSelector) {
        class benRef {
            constructor() {
                let doms = eldom.querySelectorAll(`[ref=${refSelector}]`)
                // console.log(doms)
                this.createRefDom(doms)
            }
            createRefDom(dom) {
                if (isNaN(dom.length + 0)) {
                    return this.createRefOneDom(dom)
                }
                let simple
                console.log(dom)
                if (dom.length == 1) {
                    simple = true
                    let refDom = this.createRefOneDom(dom[0])
                    Object.keys(refDom).forEach((key) => {
                        this[key] = refDom[key]
                    })
                    this.dom = dom[0]
                } else {
                    simple = false
                    this.dom = dom[0]
                    this.doms = [...dom].map((d, index) => { this[index] = this.createRefOneDom(d); return this[index] })

                    Object.keys(unit).forEach((key) => {
                        this[key] = (...arg) => { this.doms.forEach((d) => { d[key](...arg) }); return this; }
                    })
                    this.each = (fn) => { this.doms.forEach(fn) }
                }
                return this
            }
            createRefOneDom(dom) {
                let child = {}
                Object.keys(unit).forEach((key) => {
                    child[key] = (...arg) => { unit[key](dom, ...arg); return child; }
                })
                return child
            }
        }
        return new benRef()
    }
    function Ref(value, fn) {
        return new Proxy({ value }, {
            set: (target, attr, value) => {
                fn(value, target[attr])
                target[attr] = value
                return true;
            }, get: (target, attr) => {
                return target[attr]
            }
        })
    }
    return { refDom, Ref }
}
export default el