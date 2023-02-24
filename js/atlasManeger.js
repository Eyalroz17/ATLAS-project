import atlasClass from "./atlasClass.js";
import rightClass from "./rightClass.js";


export const doApi = async (query) => {
    try {
        const url = `https://restcountries.com/v3.1/name/${query}/?fullText=true`;
        const resp = await fetch(url);
        const data = await resp.json();
        console.log(`url is ${url}`);

        createAtlas(data);
        createFlag(data);
    }
    catch(err){
        console.log(err);
        const url = `https://restcountries.com/v3.1/name/${query}`;
        console.log(`url is ${url}`);
        const resp = await fetch(url);
        const data = await resp.json();
        createAtlas(data);
        createFlag(data);
      }
}

const createAtlas = (ar) => {
    document.querySelector("#id_parent").innerHTML = "";
    let country = new atlasClass("#id_parent", ar[0],  shortTofullCountry, doApi);
    country.render();
}
const createFlag = (ar) => {
    document.querySelector("#id_right").innerHTML = "";
    let country = new rightClass("#id_right", ar[0],  shortTofullCountry, doApi);
    country.render();
}




const shortTofullCountry = async (codeCountry) => {
    let url = `https://restcountries.com/v3.1/alpha/${codeCountry}`;
    let resp = await fetch(url);
    let data = await resp.json();
    let fullCountry = await (data[0].name.common);
    return fullCountry;
}


