import ClickOnPopup from '../events/click-on-popup';
import ClickOnBurgerEvent from '../events/click-on-burger';
import ClickChangeLanguage from '../events/click-change-language';
import ClickHotKeys from '../events/click-on-hot-keys';
import ClickChangeTheme from '../events/click-change-theme';
import ClickOnTaskDeleteBtn from "../events/click-on-taskDeleteBtn";
import ClickOnReloadBtn from "../events/click-on-reloadBtn";
import ClickOnDeleteAllTasks from "../events/click-on-delete-all-tasks";
import ClickOnTaskCompleteBtn from "../events/click-on-taskCompleteBtn";
import ClickOnTaskEditBtn from "../events/click-on-taskEditBtn";
import ClickOnSoundBtn from "../events/click-on-sound-btn";
import DragAndDrop from "../events/drag-and-drop";
import PageLoading from "../events/ page-loading";

export default class EventsInitializer {
    constructor() {
        this.eventsPool = [
            new PageLoading(),
            new ClickOnPopup(),
            new ClickOnBurgerEvent(),
            new ClickChangeLanguage(),
            new ClickHotKeys(),
            new ClickChangeTheme(),
            new ClickOnTaskDeleteBtn(),
            new ClickOnReloadBtn(),
            new ClickOnDeleteAllTasks(),
            new ClickOnReloadBtn(),
            new ClickOnTaskCompleteBtn(),
            new ClickOnTaskEditBtn(),
            new ClickOnSoundBtn(),
            new DragAndDrop()
        ]
    }

    initEvents() {
        this.eventsPool.forEach((item) => {
            document.addEventListener('DOMContentLoaded', item.initEvent());
        });
    }
}
