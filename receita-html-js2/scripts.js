
let beers = ["Skol", "Devassa", "Brahma"]

let button = document.getElementById("button-load")
button.addEventListener("click", loadBeers) 
function loadBeers(){
    let div = document.getElementById("beers")
    let htmlBeers = beers.map(transform) 
    div.innerHTML = `${htmlBeers.join("\n")}`
}

let sortButton = document.getElementById("button-sort")
sortButton.addEventListener("click", loadSortBeers) 
function loadSortBeers(){
    let div = document.getElementById("loading")
    let htmlBeers = beers.sort().map(transform) 
    div.innerHTML = `${htmlBeers.join("\n")}`
}

let shuffleButton = document.getElementById("button-shuffle")
shuffleButton.addEventListener("click", loadShuffledBeers) 
function loadShuffledBeers(){
    let div = document.getElementById("beers")
    let htmlBeers = beers.sort(() => Math.random() - 0.5).map(transform) 
    div.innerHTML = `${htmlBeers.join("\n")}`
}

function transform(item){
    return `<div>${item}</div>`
}