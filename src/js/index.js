// Carne - 400g por pessoa + de 6 horas - 650
// Cerveja - 1200 ml por Pessoa + de 6 horas - 2000ml
// Refrigerante/agua - 1000 ml por pessoa + de 6 horas 1500 ml

// Crianças valem por 0,5


let inputAdultos = document.getElementById("adultos")
let inputCriancas = document.getElementById("criancas")
let inputDuracao = document.getElementById("duracao")

let resultado = document.getElementById("resultado")

function calcular() {

    let adultos = inputAdultos.value
    let criancas = inputCriancas.value
    let duracao = inputDuracao.value

    let quantidadeTotalCarne = carnePorPessoa(duracao) * adultos + (carnePorPessoa(duracao) / 2 * criancas)

    let quantidadeTotalCerveja = cervejaPorPessoa(duracao) * adultos 

    let quantidadeTotalBebidas = bebidasPorPessoa(duracao) * adultos + (bebidasPorPessoa(duracao) / 2 * criancas)


    resultado.innerHTML = `<p>${quantidadeTotalCarne / 1000} Kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(quantidadeTotalCerveja / 355)} Latas de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(quantidadeTotalBebidas / 2000)} Pet's 2L de Bebidas</p>`
}

function carnePorPessoa(duracao){
    if(duracao >= 6){
        return 650
    }else{
        return 400
    }
}

function cervejaPorPessoa(duracao){
    if(duracao >= 6){
        return 2000
    }else{
        return 1200
    }
}

function bebidasPorPessoa(duracao){
    if(duracao >= 6){
        return 1500
    }else{
        return 100
    }
}


