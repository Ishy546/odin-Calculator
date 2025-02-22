const container = document.querySelector(".container");
const screen= document.createElement("div");
screen.classList.add("screen");
screen.style.cssText="background-color: white; border: 3px solid black; padding: 20px; border-radius: 4px; margin: 30px; height: 110px; margin-bottom: 3px; display: flex; justify-content: flex-end; align-items: flex-end; font-size: 25px;";
let obj={data: 0, ascii: "789/456x123-.0=+", operator: false, operand: ''};
screen.textContent=obj.data;
container.appendChild(screen);
const gridContainer=document.createElement("div");
gridContainer.classList.add("gridContainer");
gridContainer.style.cssText="background-color: lightgrey; padding: 10px; height: 275px; margin: 20px; margin-top:12px; border-radius: 4px; gap: 13px; display: flex; flex-wrap: wrap; justify-content: space-between; align-content: space-between;";
const selectors = document.createElement("div");
selectors.classList.add("selectors");
selectors.style.cssText="padding: 10px; height: 60px; margin: 20px; margin-top:0px; margin-bottom: 0px; border-radius: 4px; gap:15px; display: flex;";
const clear = document.createElement("div");
clear.classList.add("clear");
clear.textContent="Clear";
clear.style.cssText="background-color: lightgreen; width: 210px; height: 60px; border-radius: 4px; border: 3px solid black; display: flex; justify-content: center; align-items: center;";
const del=document.createElement("div");
del.classList.add("del");
del.textContent="Delete";
del.style.cssText="background-color: lightcoral; width: 210px; height: 60px; border-radius: 4px; border: 3px solid black;  display: flex; justify-content: center; align-items: center;";
selectors.appendChild(clear);
selectors.appendChild(del);
container.appendChild(selectors);
container.appendChild(gridContainer);
const ascii = "789/456x123-.0=+";
for (let i=0; i<16; i++){
    const grid = document.createElement("div");
    grid.classList.add("grid");
    grid.setAttribute("id", i);
    grid.style.cssText="border: 3px solid black; width: 55px; height: 55px; border-radius: 4px; display: flex; justify-content: center; align-items: center;";
    grid.textContent=ascii[i];
    gridContainer.appendChild(grid);
}
const griddy = document.querySelectorAll(".grid");
griddy.forEach((gri) => {
    gri.addEventListener("click", (e) => {
        let x = e.target.textContent;
        if ('0123456789'.includes(x)) {
            obj.data = obj.data === "0" || obj.data === "Error" ? x : obj.data + x;
        } else if ('+-x/'.includes(x)) {
            if (!obj.operator) { // Prevent multiple operators in a row
                obj.operator = true;
                obj.data += x;
                obj.operand = x;
            }
        } else if (x === "=") {
            obj.data = evaluateExpression(obj.data).toString();
            obj.operator = false;
            obj.operand = '';
        }

        screen.textContent = obj.data; // Update display
    });
});
function evaluateExpression(expression) {
    try {
        expression = expression.replace(/x/g, '*'); // Replace 'x' with '*' for multiplication
        let result = new Function('return ' + expression)(); // Safe evaluation
        return Number.isFinite(result) ? result : "Error"; // Handle division by zero
    } catch {
        return "Error"; // Catch any invalid expressions
    }
}
const cleared = document.querySelector(".clear");
cleared.addEventListener("click", () => {
    obj.data = "0"; 
    obj.operator = false;
    obj.operand = '';
    screen.textContent = obj.data;//make sure you update the display
});

const delet = document.querySelector(".del");
delet.addEventListener("click", () => {
    obj.data = obj.data.slice(0, -1) || "0"; //Removes the last character, default to "0" if empty
    screen.textContent = obj.data;
});