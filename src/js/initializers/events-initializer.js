//import ClickOnZoomEvent from "../events/click-on-zoom";

import ClickOnBurgerEvent from "../events/click-on-burger";

export default class EventsInitializer {
    constructor() {
        this.eventsPool = [
            //new ClickOnZoomEvent()
            new ClickOnBurgerEvent(),
        ]
    }

    initEvents() {
        this.eventsPool.forEach((item) => {
            document.addEventListener("DOMContentLoaded", item.initEvent());
        });
    }
}