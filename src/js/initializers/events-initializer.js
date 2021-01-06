import ClickOnPopup from "../events/click-on-popup";
import ClickOnBurgerEvent from "../events/click-on-burger";

export default class EventsInitializer {
  constructor() {
    this.eventsPool = [
      new ClickOnPopup(),
      new ClickOnBurgerEvent()
    ]
  }

  initEvents() {
    this.eventsPool.forEach((item) => {
      document.addEventListener("DOMContentLoaded", item.initEvent());
    });
  }
}
