let unit = {
    on: (d, ...arg) => { d.addEventListener(...arg) },
    css: (d, attr, value) => { d.style[attr] = value },
    attr: (d, attr, value) => { d[attr] = value; },
}
class benDomRef {
    constructor(doms) {
        this.createRefDom(doms)
    }
    createRefDom(dom) {
        if (isNaN(dom.length + 0)) {
            return this.createRefOneDom(dom)
        }
        let simple
        // console.log(dom)
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
class benModRef {
    constructor(eldom) {
        this.eldom = eldom
        this.refs = {}
    }
    init(refSelector) {
        let doms = this.eldom.querySelectorAll(`[ref=${refSelector}]`)
        return new benDomRef(doms)
    }
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

function init(html) {
    let el = document.createElement('div');
    el.innerHTML = html
    return { el, mod: new benModRef(el) }
}

export { Ref, init }