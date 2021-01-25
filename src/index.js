// Import styles
import './styles/index.scss'

import "regenerator-runtime/runtime.js";

// Import planner initializer
import PlannerInitializer from "./js/initializers/planner-initializer";

const plannerInitializer = new PlannerInitializer();
plannerInitializer.initPlanner();