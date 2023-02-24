import { doApi } from "./atlasManeger.js";
import { declareEvents } from "./eventsView.js"


const init = () => {
  doApi("israel");
  declareEvents(doApi);
}



init();