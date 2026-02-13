export const Calculator = {
  title: "Calculator",

  render() {
    const container = document.createElement("div");
    container.className = "p-4 bg-slate-900 h-full";

    const display = document.createElement("div");
    display.className = "bg-black text-white p-4 text-right text-2xl mb-4";
    display.innerText = "0";
    container.appendChild(display);

    const buttons = [
      "7","8","9","/",
      "4","5","6","*",
      "1","2","3","-",
      "0",".","=","+"
    ];

    buttons.forEach(b => {
      const btn = document.createElement("button");
      btn.innerText = b;
      btn.className = "m-1 p-3 bg-slate-700 rounded w-14 text-white";

      btn.onclick = () => {
        if (b === "=") {
          try {
            display.innerText = Function("return " + display.innerText)();
          } catch {
            display.innerText = "Error";
          }
        } else {
          display.innerText =
            display.innerText === "0" ? b : display.innerText + b;
        }
      };

      container.appendChild(btn);
    });

    return container;
  }
};
