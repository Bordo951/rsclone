import EventsInitializer from "./events-initializer";
import  TranslateInitializer from "../helpers/translate";

export default class PlannerInitializer {
    constructor() {
        this.eventsInitializer = new EventsInitializer();
        this.translateInitializer = new TranslateInitializer();
    }

    initPlanner() {
        this.eventsInitializer.initEvents();
        this.translateInitializer.init();
    }
}
