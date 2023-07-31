let unit = {
    on: (d, ...arg) => { d.addEventListener(...arg) },
    css: (d, attr, value) => { d.style[attr] = value },
    attr: (d, attr, value) => { d[attr] = value; },
}
class benDomRef {
    constructor(doms) {
        return this.createRefDom(doms)
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
        this.variable = {}
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

function reRender(html, v) {
    let el = document.createElement('div');
    el.innerHTML = html
    el.attrs = {}
    el.querySelectorAll("[benhtml]").forEach((f) => {
        f.removeAttribute("benhtml")
        let inner = f.getAttribute("#html").trim()
        f.removeAttribute("#html")
        let t = eval(inner)
        f.innerHTML = t
    });
    el.querySelectorAll("[benfor]").forEach((f) => {
        f.removeAttribute("benfor")
        let mo = f.getAttribute("#for").trim()
        f.removeAttribute("#for")
        let mos = mo.match(/(.*?)\sin\s(.*?)$/)
        if (!mos) return
        //------
        let inter
        try {
            inter = JSON.parse(mos[2])
        } catch (e) {
            inter = eval(`${mos[2]}`)
        }
        let tempFragment = document.createDocumentFragment()
        Object.keys(inter).forEach((value, key) => {
            let cNode = f.cloneNode(true)
            let temps = cNode.outerHTML.match(/\{\{(.*?)\}\}/g)
            if (temps) {
                [...new Set(temps)].forEach((r) => {
                    let t = eval(r.replace(/\{|\}/g, "").replace(new RegExp(mos[1]), "inter[value]"))
                    cNode.innerHTML = cNode.innerHTML.replace(new RegExp(r, 'g'), t)
                    let onclick = cNode.attributes['$onclick']
                    if (onclick) {
                        cNode.addEventListener("click", () => eval(onclick.value.replace(new RegExp(r, 'g'), t)))
                    }
                })
            }
            tempFragment.appendChild(cNode)
        });
        // for (let attrIndex = 0; attrIndex < f.attributes.length; attrIndex++) {
        //     console.log(f.attributes[attrIndex])
        // }
        f.parentNode.appendChild(tempFragment)
        f.parentNode.removeChild(f)
    });
    return el
}

function init(html, v) {
    let el = reRender(html, v)
    function bind(fn) {
        fn && fn()
        return el
    }

    return { el, mod: new benModRef(el), bind }
}

function nextTick(fn) {
    return setTimeout(fn, 10)
}
export { Ref, init, reRender, nextTick }