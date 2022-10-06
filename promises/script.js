let cervejas = [];

//cs é um array de cervejas
const carregarDiv = (cs, elementId, cabecalhoItems, obj) => {
    const div = document.getElementById(elementId);
    const cabecalho = cabecalhoItems.map(item => `<th> ${item}</th>` ).join("");
    const itensHtml = cs.map( item => `<tr>`+ obj.map(
        objet=> `<td>${item[objet]}</td>`
    ).join("")+`</tr>` );

    div.innerHTML = `
        <table class="table table-striped">
            <tr>${cabecalho}</tr> ${itensHtml.join("\n")}
        </table>
    `;
}

async function carregarCervejas(
    quantidade=3,
    link="https://random-data-api.com/api/v2/beers?size=",
    cabecalhoItems=["Nome", "Alcool", "Amargor", "Estilo"],
    obj=["name", "alcohol", "ibu", "style"],
    id="cervejasDiv"
){
    try {
        let res = await fetch(link+quantidade);
        cervejas = await res.json();
        carregarDiv(cervejas, id, cabecalhoItems, obj);
    } catch(err) {
        document.getElementById("cervejasDiv").innerHTML = "Fudeu...";
    }
}

let botao = document.getElementById("botaoCarregar");
botao.addEventListener("click", () => carregarCervejas() );