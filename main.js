const form = document.getElementById("list")
const nome = []
const numero = []
const num =  parseFloat(prompt("seu ddd"))

let linhas = ""

form.addEventListener('submit', function(e) {
    e.preventDefault();
    adnaLinhas()
    atualizaTabela()
})

function adnaLinhas() {

    const inputNome = document.getElementById("nome")
    const inputNumero = document.getElementById("numero")

        if (nome.includes(inputNome.value)){
        alert (`o nome ${inputNome.value} foi adicionado` )
    } else {

    nome.push(inputNome.value)
    numero.push(parseFloat(inputNumero.value))
    
    let linha = '<tr>'
    linha += `<td>${inputNome.value}</td>`
    linha += `<td>${inputNumero.value}</td>`
    linha += '</tr>'

    linhas += linha
    }

    
    inputNome.value = ""
    inputNumero.value = ""

}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas

}
