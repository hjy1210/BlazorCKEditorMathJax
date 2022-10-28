export function typeset() {
    MathJax.typeset();
}
export async function typeset2(texstring) {
    var ele = document.createElement("div"); // document.getElementById("me");
    ele.innerHTML = texstring;
    await MathJax.typesetPromise([ele]);
    return ele.innerHTML;
}
