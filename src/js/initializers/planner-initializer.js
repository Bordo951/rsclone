import EventsInitializer from "./events-initializer";
import TranslatorInitializer from "./translator-initializer";

export default class PlannerInitializer {
    constructor() {
        this.eventsInitializer = new EventsInitializer();
        this.translatorInitializer = new TranslatorInitializer();
    }

    initPlanner() {
        this.eventsInitializer.initEvents();
        this.translatorInitializer.init();
    }
}
