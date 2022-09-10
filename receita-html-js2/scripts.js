
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
    let div = document.getElementById("beers")
    let htmlBeers = beers.sort().map(transform) 
    div.innerHTML = `${htmlBeers.join("\n")}`
}

function transform(item){
    return `<div>${item}</div>`
}