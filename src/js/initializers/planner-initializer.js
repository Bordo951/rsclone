import EventsInitializer from "./events-initializer";

export default class PlannerInitializer {
    constructor() {
        this.eventsInitializer = new EventsInitializer();
    }

    initPlanner() {
        this.eventsInitializer.initEvents();
    }
}
