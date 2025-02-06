const container = document.querySelector(".container");
const screen= document.createElement("div");
screen.classList.add("screen");
screen.style.cssText="background-color: white; border = 3px solid blue; padding: 20px; border-radius: 4px; margin: 20px; height: 110px; margin-bottom: 3px;";
const display= document.createElement("div");//This is where the result will be displayed
container.appendChild(screen);
const gridContainer=document.createElement("div");
gridContainer.classList.add("gridContainer");
gridContainer.style.cssText="background-color: pink; padding: 10px; height: 275px; margin: 20px; margin-top:12px; border-radius: 4px;";
const selectors = document.createElement("div");
selectors.classList.add("selectors");
selectors.style.cssText="padding: 10px; height: 60px; margin: 10px; margin-top:0px; border-radius: 4px; gap:10px; display: flex;";
const clear = document.createElement("div");
clear.classList.add("clear");
clear.style.cssText="background-color: lightgreen; width: 210px; height: 60px; border-radius: 4px;";
const del=document.createElement("div");
del.classList.add("del");
del.style.cssText="background-color: lightcoral; width: 210px; height: 60px; border-radius: 4px;";
for (let i=0; i<16; i++){
    const grid = createElement(div);
    grid.classList.add("grid");
    grid.style.cssText="border: 4px solid black; ";
}
selectors.appendChild(clear);
selectors.appendChild(del);
container.appendChild(selectors);
container.appendChild(gridContainer);
