import EventsInitializer from './events-initializer';
import TranslatorInitializer from './translator-initializer';
import ChangeThemeInitializer from './change-theme-initializer';

export default class PlannerInitializer {
    constructor() {
        this.eventsInitializer = new EventsInitializer();
        this.translatorInitializer = new TranslatorInitializer();
        this.changeThemeInitializer = new ChangeThemeInitializer();
    }

    initPlanner() {
        this.eventsInitializer.initEvents();
        this.translatorInitializer.init();
        this.changeThemeInitializer.init();
    }
}
