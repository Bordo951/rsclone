import PlannerRender from "../renders/planner-render";
import EventsInitializer from "./events-initializer";
import TranslatorInitializer from "./translator-initializer";
import ChangeThemeInitializer from './change-theme-initializer';
import TasksInitializer from "./tasks-initializer";
import SwitchSound from "../helpers/switch-sound";
import TrackerInitializer from "./tracker-initializer";


export default class PlannerInitializer {
    constructor() {
        this.plannerRender = new PlannerRender();
        this.eventsInitializer = new EventsInitializer();
        this.translatorInitializer = new TranslatorInitializer();
        this.changeThemeInitializer = new ChangeThemeInitializer();
        this.tasksInitializer = new TasksInitializer();
        this.switchSound = new SwitchSound();
        this.trackerInitializer = new TrackerInitializer();
    }

    initPlanner() {
        this.plannerRender.renderPlanner();
        this.eventsInitializer.initEvents();
        this.translatorInitializer.init();
        this.changeThemeInitializer.init();
        this.tasksInitializer.init();
        this.switchSound.switchSound();
        this.trackerInitializer.init();

    }
}
