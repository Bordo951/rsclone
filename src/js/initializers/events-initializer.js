import ClickOnPopup from "../events/click-on-popup";
import ClickOnBurgerEvent from "../events/click-on-burger";
import ClickChangeLanguage from "../events/click-change-language";

export default class EventsInitializer {
    constructor() {
        this.eventsPool = [
            new ClickOnPopup(),
            new ClickOnBurgerEvent(),
            new ClickChangeLanguage(),
        ]
    }

    initEvents() {
        this.eventsPool.forEach((item) => {
            document.addEventListener("DOMContentLoaded", item.initEvent());
        });
    }
}
