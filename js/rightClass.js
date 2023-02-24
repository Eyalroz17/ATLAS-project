export default class rightClass {
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
        div.className = "col-md-12 mx-auto p-5";
        document.querySelector(this.parent).append(div);

        div.innerHTML = `
        <div class="h2"><strong>States with borders:</strong><br>
        <div class="borders_div"></div>
        </div>
        <iframe class="col-12" width="100%" height="400" src="https://maps.google.com/maps?q=${this.map[0]},${this.map[1]}&z=7&ie=UTF8&iwloc=&output=embed" ></iframe>
       `

        let borders_div = div.querySelector(".borders_div");
        this.borders.forEach(async (item) => {
            let a = document.createElement("a");
            a.innerHTML = await this.shortTofullCountry(item) + " ";
            a.style = "color: black; cursor: pointer; "
            borders_div.append(a);
            a.addEventListener("click", () => {
                this.doApi(a.innerHTML);
            })
        })



    }
}