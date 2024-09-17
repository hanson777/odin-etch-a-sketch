// VARIABLES 

const containerDiv = document.querySelector(".container");
const sliderDisplay = document.querySelector(".sliderdisplay");
const slider = document.querySelector(".slider");
const eraseButton = document.querySelector(".eraser");
const clearButton = document.querySelector(".clear");
const rainbowButton = document.querySelector(".rainbow");
const defaultButton = document.querySelector(".default");
const colorPicker = document.querySelector(".color-picker");

let penColor = colorPicker.value;
let defaultSelected = true;
let eraserSelected = false;
let rainbowSelected = false;
let mousedown = false;
let mousehold = false;
let boxCount = 16;

createGrid(boxCount);
defaultSelect();

// FUNCTIONS

slider.oninput = function (){
    sliderDisplay.textContent = `${this.value} x ${this.value}`;
    boxCount = this.value;
    setTimeout(() => {
        clearGrid();
        createGrid(boxCount);
    }, "100");
}

colorPicker.oninput = function (){
    penColor = this.value;
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

function eraserSelect(){
    eraserSelected = true;
    eraseButton.style.backgroundColor = "#333";
    eraseButton.style.color = "rgba(237,237,237,255)";

    defaultSelected = false;
    defaultButton.style.backgroundColor = "rgba(237,237,237,255)";
    defaultButton.style.color = "#333";

    rainbowSelected = false;
    rainbowButton.style.backgroundColor = "rgba(237,237,237,255)";
    rainbowButton.style.color = "#333";
}

function defaultSelect(){
    defaultSelected = true;
    defaultButton.style.backgroundColor = "#333";
    defaultButton.style.color = "rgba(237,237,237,255)";

    eraserSelected = false;
    eraseButton.style.backgroundColor = "rgba(237,237,237,255)";
    eraseButton.style.color = "#333";

    rainbowSelected = false;
    rainbowButton.style.backgroundColor = "rgba(237,237,237,255)";
    rainbowButton.style.color = "#333";
}

function rainbowSelect(){
    rainbowSelected = true;
    rainbowButton.style.backgroundColor = "#333";
    rainbowButton.style.color = "rgba(237,237,237,255)";

    eraserSelected = false;
    eraseButton.style.backgroundColor = "rgba(237,237,237,255)";
    eraseButton.style.color = "#333";

    defaultSelected = false;
    defaultButton.style.backgroundColor = "rgba(237,237,237,255)";
    defaultButton.style.color = "#333";
}

// EVENT LISTENERS 

document.addEventListener("mousedown", () => mousedown = true);

document.addEventListener("mouseup", () => mousedown = false);

document.addEventListener("mousemove", (event) => {
    if(mousedown){
        if(event.target.classList.contains("draw") && !eraserSelected){
            event.target.style.backgroundColor = penColor;
        } else if(event.target.classList.contains("draw") && eraserSelected){
            event.target.style.backgroundColor = "white";
        }
    }
});

document.addEventListener("click", (event) => {
    if(event.target.classList.contains("eraser")){
        eraserSelect();
    } else if(event.target.classList.contains("default")){
        defaultSelect();
    } else if(event.target.classList.contains("rainbow")){
        rainbowSelect();
    }
});

clearButton.addEventListener("click", () => { 
    clearGrid();
    createGrid(boxCount);
});


