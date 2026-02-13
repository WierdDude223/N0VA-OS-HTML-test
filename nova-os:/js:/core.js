import { State } from "./state.js";
import { WindowManager } from "./windowManager.js";
import { Calculator } from "./apps/calculator.js";
import { Notes } from "./apps/notes.js";

const state = new State();
const wm = new WindowManager();

const apps = {
  calculator: Calculator,
  notes: Notes
};

document.getElementById("startBtn").onclick = () => {
  wm.create(apps.calculator);
};

setInterval(() => {
  document.getElementById("clock").innerText =
    new Date().toLocaleTimeString([], {hour:"2-digit", minute:"2-digit"});
}, 1000);
