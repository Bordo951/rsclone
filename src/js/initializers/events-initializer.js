import ClickOnPopup from "../events/click-on-popup";

export default class EventsInitializer {
  constructor() {
    this.eventsPool = [
      //new ClickOnZoomEvent()
      new ClickOnPopup()
    ]
  }

  initEvents() {
    this.eventsPool.forEach((item) => {
      document.addEventListener("DOMContentLoaded", item.initEvent());
    });
  }
}