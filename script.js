const containerDiv = document.querySelector(".container")
let boxCount = 32


for(let i = 0; i < boxCount; i++){
    for(let j = 0; j < boxCount; j++){
        const box = document.createElement("div")
        box.style.width = (containerDiv.clientWidth / boxCount) + 'px'
        box.style.height = (containerDiv.clientHeight / boxCount) + 'px'
        containerDiv.appendChild(box)
    }
}
