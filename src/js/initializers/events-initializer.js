import ClickOnPopup from '../events/click-on-popup';
import ClickOnBurgerEvent from '../events/click-on-burger';
import ClickChangeLanguage from '../events/click-change-language';
import initShowPopupHotKey from '../events/click-on-hot-keys';

export default class EventsInitializer {
  constructor() {
    this.eventsPool = [
      new ClickOnPopup(),
      new ClickOnBurgerEvent(),
      new ClickChangeLanguage(),
      new initShowPopupHotKey(),
    ];
  }

  initEvents() {
    this.eventsPool.forEach((item) => {
      document.addEventListener('DOMContentLoaded', item.initEvent());
    });
  }
}
