export class WindowManager {
  constructor() {
    this.z = 100;
  }

  create(app) {
    const id = "win_" + Date.now();
    const win = document.createElement("div");
    win.className = "window";
    win.style.left = "120px";
    win.style.top = "80px";
    win.style.width = "700px";
    win.style.height = "500px";
    win.style.zIndex = ++this.z;
    win.id = id;

    win.innerHTML = `
      <div class="window-header">
        <span>${app.title}</span>
        <button onclick="document.getElementById('${id}').remove()">✕</button>
      </div>
      <div class="window-body flex-1 overflow-auto"></div>
    `;

    document.body.appendChild(win);
    win.querySelector(".window-body").appendChild(app.render());
    this.makeDraggable(win);
  }

  makeDraggable(win) {
    const header = win.querySelector(".window-header");
    header.onmousedown = e => {
      const ox = e.clientX - win.offsetLeft;
      const oy = e.clientY - win.offsetTop;

      document.onmousemove = ev => {
        win.style.left = ev.clientX - ox + "px";
        win.style.top = ev.clientY - oy + "px";
      };

      document.onmouseup = () => document.onmousemove = null;
    };
  }
}
