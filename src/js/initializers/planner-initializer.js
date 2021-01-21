import PlannerRender from "../renders/planner-render";
import EventsInitializer from "./events-initializer";
import TranslatorInitializer from "./translator-initializer";
import ChangeThemeInitializer from './change-theme-initializer';
import TasksInitializer from "./tasks-initializer";
import TrackerInitializer from "./tracker-initializer";


export default class PlannerInitializer {
    constructor() {
        this.plannerRender = new PlannerRender();
        this.eventsInitializer = new EventsInitializer();
        this.translatorInitializer = new TranslatorInitializer();
        this.changeThemeInitializer = new ChangeThemeInitializer();
        this.tasksInitializer = new TasksInitializer();
        this.trackerInitializer = new TrackerInitializer();
    }

    initPlanner() {
        this.plannerRender.renderPlanner();
        this.eventsInitializer.initEvents();
        this.translatorInitializer.init();
        this.changeThemeInitializer.init();
        this.tasksInitializer.init();
        this.trackerInitializer.init();
    }
}
