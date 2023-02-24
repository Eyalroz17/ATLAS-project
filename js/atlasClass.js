export default class atlasClass {
    constructor(_parent, _item,  shortTofullCountry, doApi) {
        this.parent = _parent;
        this.name = _item.name.common;
        this.flag = _item.flags.svg;
        this.pop = _item.population.toLocaleString();
        this.region = _item.region;
        this.languages = Object.keys(_item.languages);
        this.coin = Object.keys(_item.currencies);
        this.coinDescription = Object.values(_item.currencies)[0].name;
        this.capital = _item.capital;
        this.map = _item.latlng;
        this.borders = _item.borders;
        this.doApi = doApi;
        this.shortTofullCountry = shortTofullCountry;
    }

    render() {
        let div = document.createElement("div");
        div.className = "";

        document.querySelector(this.parent).append(div);

        div.innerHTML = `<div style="heigh:400px;justify-content: center;text-align: center">
        <h2 style="font-size: 5em;">${this.name}</h2>
        <img src="${this.flag}" alt="${this.name}" class="w-50 ;" style="border-radius: 40px;">


        <div style="font-size:2em;">
        <div>Capital: ${this.capital}</div>
        <div>Residents: ${this.pop} </div>
        <div>Region: ${this.region}</div>
        <div>Languages: ${this.languages}</div>
        <div>Coin:${this.coinDescription}</div>
        
        </div>

        </div>
       ` 
       

        



    }
}