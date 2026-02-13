export class State {
  constructor() {
    this.data = JSON.parse(localStorage.getItem("novaX")) || {
      accent: "#3b82f6",
      wallpaper: "",
      installedApps: []
    };
  }

  save() {
    localStorage.setItem("novaX", JSON.stringify(this.data));
  }
}
