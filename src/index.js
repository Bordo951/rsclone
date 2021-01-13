import "regenerator-runtime/runtime.js";

// Import styles
import './styles/index.scss'

// Import dashboard initializer
import PlannerInitializer from "./js/initializers/planner-initializer";

const plannerInitializer = new PlannerInitializer();
plannerInitializer.initPlanner();