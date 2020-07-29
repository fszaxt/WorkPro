const baseUrl = "https://fszaxt.github.io/WorkPro/dist/";
const matchList = [
    {
        test: /wfby\.bg-online\.com\.cn/,
        scripts: "ect"
    }
]

let url = window.location.href;
let match = matchList.find(e => {
    return url.match(e.test);
})

if(match && match.scripts && (typeof match.scripts === "string" || Array.isArray(match.scripts))){
    let arr = typeof match.scripts === "string" ? [match.scripts] : match.scripts;
    arr.forEach(addScriptElement);

    function addScriptElement(script){
        let el = document.createElement("script");
        el.setAttribute("src",baseUrl + script + ".js");
        document.body.appendChild(el);
    }
}

