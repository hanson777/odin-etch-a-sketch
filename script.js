const containerDiv = document.querySelector(".container")
let boxCount = 50


for(let i = 0; i < boxCount; i++){
    for(let j = 0; j < boxCount; j++){
        const box = document.createElement("div")
        box.style.width = (containerDiv.clientWidth / boxCount) + 'px'
        box.style.height = (containerDiv.clientHeight / boxCount) + 'px'
        box.className = "draw"
        containerDiv.appendChild(box)
    }
}

document.addEventListener("mouseover", event => { 
    if(event.target.classList.contains("draw")){
        event.target.classList.add("color")
    }
})




