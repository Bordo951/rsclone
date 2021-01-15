import ClickOnPopup from "../events/click-on-popup";
import ClickOnBurgerEvent from "../events/click-on-burger";
import ClickOnTaskDeleteBtn from "../events/click-on-taskDeleteBtn";
import ClickOnReloadBtn from "../events/click-on-reloadBtn";
export default class EventsInitializer {
  constructor() {
    this.eventsPool = [
      new ClickOnPopup(),
      new ClickOnBurgerEvent(),
      new ClickOnTaskDeleteBtn(),
      new ClickOnReloadBtn()
    ]
  }

  initEvents() {
    this.eventsPool.forEach((item) => {
      document.addEventListener("DOMContentLoaded", item.initEvent());
    });
  }
}
