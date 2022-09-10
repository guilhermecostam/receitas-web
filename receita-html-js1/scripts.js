
let button = document.getElementById("loadingButton");
button.addEventListener("click", beerAppears);

let div = document.getElementById("beer");
let isVisible = false;

function beerAppears() {
    isVisible = !isVisible;

    if (isVisible) {
        div.style.opacity = 1;
    } else {
        div.style.opacity = 0;
    }
}


// fazer um efeito de fade out na opacidade do div, apagando seu conteúdo,
// e um efeito de fade in, mostrando o div novamente novamente,
// mas já com um novo innerHTML para exibir.
// html effects for changing innerHTML
// js css fade effects for changing innerHTML