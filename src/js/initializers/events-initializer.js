import ClickOnPopup from '../events/click-on-popup';
import ClickOnBurgerEvent from '../events/click-on-burger';
import ClickChangeLanguage from '../events/click-change-language';
import ClickChangeTheme from '../events/click-change-theme';
import initShowPopupHotKey from '../events/click-on-hot-keys';

export default class EventsInitializer {
    constructor() {
        this.eventsPool = [
            new ClickOnPopup(),
            new ClickOnBurgerEvent(),
            new ClickChangeLanguage(),
            new ClickChangeTheme(),
            new initShowPopupHotKey()
        ]
    }

    initEvents() {
        this.eventsPool.forEach((item) => {
            document.addEventListener('DOMContentLoaded', item.initEvent());
        });
    }
}