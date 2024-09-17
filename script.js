const containerDiv = document.querySelector(".container");
const sliderDisplay = document.querySelector(".sliderdisplay");
const slider = document.querySelector(".slider");
const eraseButton = document.querySelector(".eraser");
let boxCount = 16;
let erase = false;
createGrid(boxCount);


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


document.addEventListener("mouseover", event => { 
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
        eraseButton.style.backgroundColor = "white";
        eraseButton.style.color = "#333";
    }
});




