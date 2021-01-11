import EventsInitializer from "./events-initializer";
import Translate from "../helpers/translate";

export default class PlannerInitializer {
    constructor() {
        this.eventsInitializer = new EventsInitializer();
        this.translate = new Translate();
    }

    initPlanner() {
        this.eventsInitializer.initEvents();
        this.translate.init();
    }
}
