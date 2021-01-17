import PlannerRender from "../renders/planner-render";
import EventsInitializer from "./events-initializer";
import TranslatorInitializer from "./translator-initializer";
import ChangeThemeInitializer from './change-theme-initializer';

export default class PlannerInitializer {
    constructor() {
        this.plannerRender = new PlannerRender();
        this.eventsInitializer = new EventsInitializer();
        this.translatorInitializer = new TranslatorInitializer();
        this.changeThemeInitializer = new ChangeThemeInitializer();
    }

    initPlanner() {
        this.plannerRender.renderPlanner();
        this.eventsInitializer.initEvents();
        this.translatorInitializer.init();
        this.changeThemeInitializer.init();
    }
}
