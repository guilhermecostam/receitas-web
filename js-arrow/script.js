
let empresas = ["Disney", "Meta", "Nubank", "Amazon", "PicPay"];

const carregarDiv = (arr) => {
    const div = document.getElementById("empresas");
    const arrayHtml = arr.map(item => `<h1>${item}</h1>`) ;
    div.innerHTML = `${arrayHtml.join("\n")}`;
}

let botao = document.getElementById("botaoCarregar");
botao.addEventListener("click", () => carregarDiv(empresas));

let botaoOrdenado = document.getElementById("botaoOrdenar");
botaoOrdenado.addEventListener("click", () => {
    empresas.sort();
    carregarDiv(empresas);
});

let botaoEmbaralhado = document.getElementById("botaoEmbaralhar");
botaoEmbaralhado.addEventListener("click", () => {
    empresas.sort(() => Math.random() - 0.5);
    carregarDiv(empresas);
});
