const baseUrl = "https://fszaxt.github.io/WorkPro/dist/"
const matchList = [
    {
        test: /wfby\.bg-online\.com\.cn/,
        scripts: "ect"
    }
]

let url = window.location;
let scripts = matchList.some(e => {
    return url.match(e.test);
})
scripts = scripts instanceof String ? [scripts] : scripts;
scripts.forEach(addScriptElement)

function addScriptElement(script){
    let el = document.createElement("script");
    el.url = baseUrl + script + ".js";
    document.body.appendChild(el);
}