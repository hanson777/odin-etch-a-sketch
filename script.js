const containerDiv = document.querySelector(".container")
const sliderDisplay = document.querySelector(".sliderdisplay")
const slider = document.querySelector(".slider")
let boxCount = 16
createGrid(boxCount)


slider.oninput = function (){
    sliderDisplay.textContent = `${this.value} x ${this.value}`
    boxCount = this.value
    setTimeout(() => {
        clearGrid()
        createGrid(boxCount)
    }, "100")
}


function createGrid(boxCount){
    dFrag = document.createDocumentFragment()
    for(let i = 0; i < boxCount; i++){
        for(let j = 0; j < boxCount; j++){
            const box = document.createElement("div")
            box.style.width = (containerDiv.clientWidth / boxCount) + 'px'
            box.style.height = (containerDiv.clientHeight / boxCount) + 'px'
            box.className = "draw"
            dFrag.appendChild(box)
        }
    }
    containerDiv.appendChild(dFrag)
}

function clearGrid(){
    containerDiv.innerHTML = ""
}


document.addEventListener("mouseover", event => { 
    if(event.target.classList.contains("draw")){
        event.target.classList.add("color")
    }
})




