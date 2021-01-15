import ClickOnPopup from "../events/click-on-popup";
import ClickOnBurgerEvent from "../events/click-on-burger";
import ClickOnTaskDeleteBtn from "../events/click-on-taskDeleteBtn";
import ClickOnUpdateBtn from "../events/click-on-updateBtn";
export default class EventsInitializer {
  constructor() {
    this.eventsPool = [
      new ClickOnPopup(),
      new ClickOnBurgerEvent(),
      new ClickOnTaskDeleteBtn(),
      new ClickOnUpdateBtn()
    ]
  }

  initEvents() {
    this.eventsPool.forEach((item) => {
      document.addEventListener("DOMContentLoaded", item.initEvent());
    });
  }
}
