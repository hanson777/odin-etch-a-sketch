// VARIABLES 

const containerDiv = document.querySelector(".container");
const sliderDisplay = document.querySelector(".sliderdisplay");
const slider = document.querySelector(".slider");
const eraseButton = document.querySelector(".eraser");
const clearButton = document.querySelector(".clear");

let boxCount = 16;
let erase = false;

createGrid(boxCount);

// FUNCTIONS

slider.oninput = function (){
    sliderDisplay.textContent = `${this.value} x ${this.value}`;
    boxCount = this.value;
    setTimeout(() => {
        clearGrid();
        createGrid(boxCount);
    }, "100");
}

function createGrid(boxCount){
    dFrag = document.createDocumentFragment();
    for(let i = 0; i < boxCount; i++){
        for(let j = 0; j < boxCount; j++){
            const box = document.createElement("div");
            box.style.width = (containerDiv.clientWidth / boxCount) + 'px';
            box.style.height = (containerDiv.clientHeight / boxCount) + 'px';
            box.className = "draw";
            dFrag.appendChild(box);
        }
    }
    containerDiv.appendChild(dFrag);
}

function clearGrid(){
    containerDiv.innerHTML = "";
}

// EVENT LISTENERS 

document.addEventListener("mousedown", (event) => { 
    if(event.target.classList.contains("draw") && !erase){
        event.target.classList.add("color");
    } else if(event.target.classList.contains("draw") && erase){
        event.target.classList.remove("color");
    }
});

eraseButton.addEventListener("click", () => {
    erase = !erase;
    if(erase){
        eraseButton.style.backgroundColor = "#333";
        eraseButton.style.color = "white";
    } else {
        eraseButton.style.backgroundColor = "rgba(237,237,237,255)";
        eraseButton.style.color = "#333";
    }
});

clearButton.addEventListener("click", () => { 
    nodeList = document.querySelectorAll("div");
    canvasGrids = Array.from(nodeList);
    canvasGrids = canvasGrids.filter((element) => element.classList.contains("draw"))
    canvasGrids.forEach((element) => element.classList.remove("color"))
});


