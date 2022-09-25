let cervejas = [
    {
        name: "Guiness",
        alcohol: "10%",
        style: "Red Ale",
        ibu: "15"
    },
    {
        name: "Desperados",
        alcohol: "6%",
        style: "Lager",
        ibu: "50"
    }, 
    {
        name: "Becks",
        alcohol: "5%",
        style: "Pilsen",
        ibu: "35"
    }
];

//cs é um array de cervejas
const carregarDiv = (
    cs,
    idDiv = 'cervejasDiv',
    theads = ['Nome', 'Álcool', 'Estilo', 'Amargor'],
    keys = ['name', 'alcohol', 'style', 'ibu']
) => {
    let thead = document.querySelector(`#${idDiv} thead tr`);
    const itensHead = theads.map( th => 
        `<th${th}</th>`
    ); 
    thead.innerHTML = `${itensHead.join("\n")}`;

    let tbody = document.querySelector(`#${idDiv} tbody`);
    const itensBody = cs.map( item => 
        `<tr>` + keys.map(key => `<td>${item[key]}</td>`).join("") + `</tr>`
    );
    tbody.innerHTML = `${itensBody.join("\n")}`;
}

let botao = document.getElementById("botaoCarregar");
botao.addEventListener("click", () => carregarDiv(cervejas));
