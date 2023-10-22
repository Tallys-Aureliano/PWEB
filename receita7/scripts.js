let coisas = []
//cs é um array de coisas
const carregarDiv = (cs, id = "tablecoisas", rowName = Object.keys(cs[0])) => {
    const tag = document.getElementById(id)
    const theadHtml = `<thead>
        <tr>
            ${rowName.map(header => `<th>${header}</th>`).join('')}
        </tr>
    </thead>`;

    const tbody =
        cs.map(item =>
            `<tbody>
                    <tr>
                        ${rowName.map(header => `<td>${item[header]}</td>`).join('')}
                    </tr>
                </tbody>`)
    tag.innerHTML = `${theadHtml + tbody.join("\n")}`
}

function carregarCervejas2() {
    let p = 
    fetch("https://random-data-api.com/api/coffee/random_coffee?size=5").then(
        res => res.json()
        ).then(json => carregarDiv(json)
        ).catch(err => document.getElementById("tablecoisas").innerHTML = `<h1>Erro ao carregar cafes, ${err}<h1>`
        )
    document.getElementById("tablecoisas").innerHTML = `Fazendo requisição`
}


let botao = document.getElementById("botaoCarregar")
botao.addEventListener("click", () => carregarCervejas2())