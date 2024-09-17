// VARIABLES 

const containerDiv = document.querySelector(".container");
const sliderDisplay = document.querySelector(".sliderdisplay");
const slider = document.querySelector(".slider");
const eraseButton = document.querySelector(".eraser");
const clearButton = document.querySelector(".clear");
const rainbowButton = document.querySelector(".rainbow");
const defaultButton = document.querySelector(".default");

const clickEvent = new Event("click");

let defaultSelected = true;
let eraserSelected = false;
let rainbowSelected = false;
let mousedown = false;
let mousehold = false;
let boxCount = 16;

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

function buttonSelect(buttonSelected, selectedButton, deselectOne, deselectOneButton, deselectTwo, deselectTwoButton){
    // Select the current button     
    buttonSelected = true;
    selectedButton.style.backgroundColor = "#333";
    selectedButton.style.color = "rgba(237,237,237,255)";
    // Deselect the other button
    deselectOne = false;
    deselectOneButton.style.backgroundColor = "rgba(237,237,237,255)";
    deselectOneButton.style.color = "#333";
    // Deselect the other button
    deselectTwo = false;
    deselectTwoButton.style.backgroundColor = "rgba(237,237,237,255)";
    deselectTwoButton.style.color = "#333";
}

// EVENT LISTENERS 

document.addEventListener("mousedown", () => mousedown = true);

document.addEventListener("mouseup", () => mousedown = false);

document.addEventListener("mousemove", (event) => {
    if(mousedown){
        if(event.target.classList.contains("draw") && !eraserSelected){
            event.target.classList.add("color");
        } else if(event.target.classList.contains("draw") && eraserSelected){
            event.target.classList.remove("color");
        }
    }
});

document.addEventListener("click", (event) => {
    if(event.target.classList.contains("eraser")){
        buttonSelect(eraserSelected, eraseButton, defaultSelected, defaultButton, rainbowSelected, rainbowButton);
    } else if(event.target.classList.contains("default")){
        buttonSelect(defaultSelected, defaultButton, eraserSelected, eraseButton, rainbowSelected, rainbowButton);
    } else if(event.target.classList.contains("rainbow")){
        buttonSelect(rainbowSelected, rainbowButton, eraserSelected, eraseButton, defaultSelected, defaultButton);
    }
});

clearButton.addEventListener("click", () => { 
    nodeList = document.querySelectorAll("div");
    canvasGrids = Array.from(nodeList);
    canvasGrids = canvasGrids.filter((element) => element.classList.contains("draw"))
    canvasGrids.forEach((element) => element.classList.remove("color"))
});


