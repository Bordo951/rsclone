import ClickOnPopup from '../events/click-on-popup';
import ClickOnBurgerEvent from '../events/click-on-burger';
import ClickChangeLanguage from '../events/click-change-language';
import ClickHotKeys from '../events/click-on-hot-keys';

export default class EventsInitializer {
  constructor() {
    this.eventsPool = [
      new ClickOnPopup(),
      new ClickOnBurgerEvent(),
      new ClickChangeLanguage(),
      new ClickHotKeys(),
    ];
  }

  initEvents() {
    this.eventsPool.forEach((item) => {
      document.addEventListener('DOMContentLoaded', item.initEvent());
    });
  }
}
