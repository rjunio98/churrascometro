// Carne - 400g por pessoa + de 6 horas - 650
// Cerveja - 1200 ml por Pessoa + de 6 horas - 2000ml
// Refrigerante/agua - 1000 ml por pessoa + de 6 horas 1500 ml

// Crianças valem por 0,5

let botaoCalcular = document.getElementById("btn")
let inputAdultos = document.getElementById("adultos")
let inputCriancas = document.getElementById("criancas")
let inputDuracao = document.getElementById("duracao")

let resultado = document.getElementById("resultado")

const carnePorPessoa = duracao => duracao >= 6 ? 650 : 400;
const cervejaPorPessoa = duracao => duracao >= 6 ? 2000 : 1200;
const bebidasPorPessoa = duracao => duracao >= 6 ? 1500 : 100;

function calcular() {
  const adultos = inputAdultos.value;
  const criancas = inputCriancas.value;
  const duracao = inputDuracao.value;

  const quantidadeTotalCarne = carnePorPessoa(duracao) * adultos + (carnePorPessoa(duracao) / 2 * criancas);
  const quantidadeTotalCerveja = cervejaPorPessoa(duracao) * adultos;
  const quantidadeTotalBebidas = bebidasPorPessoa(duracao) * adultos + (bebidasPorPessoa(duracao) / 2 * criancas);

  resultado.innerHTML = `<p>${quantidadeTotalCarne / 1000} Kg de Carne</p>`;

  resultado.innerHTML += `<p>${Math.ceil(quantidadeTotalCerveja / 355)} Latas de Cerveja</p>`;

  resultado.innerHTML += `<p>${Math.ceil(quantidadeTotalBebidas / 2000)} Pet's 2L de Bebidas</p>`;
}

botaoCalcular.addEventListener('click', () => {
    calcular();
});

