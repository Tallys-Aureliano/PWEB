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

async function carregarcoisas(coisa, teste) {
        let res = await fetch(`https://random-data-api.com/api/${teste}/random_coffee?size=5`)
        coisas = await res.json()
        carregarDiv(coisas)
    }

let botao = document.getElementById("botaoCarregar")
botao.addEventListener("click", () => carregarcoisas(coisas, "coffee"))