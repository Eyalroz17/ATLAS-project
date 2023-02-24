export const declareEvents = (doApi) => {
    let id_input = document.querySelector("#id_input")
    let btn_Search = document.querySelector("#btn_Search");

    let USA = document.querySelector(`#id_usa`);
    USA.addEventListener("click", () => {
        doApi(USA.innerHTML);
    })
    let ISRAEL = document.querySelector(`#id_israel`);
    ISRAEL.addEventListener("click", () => {
        doApi(ISRAEL.innerHTML);
    })
    let GB = document.querySelector(`#id_gb`);
    GB.addEventListener("click", () => {
        doApi(GB.innerHTML);
    })
    let FRANCE = document.querySelector(`#id_france`);
    FRANCE.addEventListener("click", () => {
        doApi(FRANCE.innerHTML);
    })
    let THAILAND = document.querySelector(`#id_thailand`);
    THAILAND.addEventListener("click", () => {
        doApi(THAILAND.innerHTML);
    })
    let philippines = document.querySelector(`#id_philippines`);
    philippines.addEventListener("click", () => {
        doApi(philippines.innerHTML);
    })

    

    id_input.addEventListener("keydown", (e) => {
        if (e.key == 'Enter')
            doApi(id_input.value);
    })
    btn_Search.addEventListener("click", () => {
        doApi(id_input.value);
    })
}