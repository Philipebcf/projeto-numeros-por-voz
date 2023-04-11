//Math random
//console.log(parseInt(Math.random() * 10));

var limiteTentativa = 1;
const menorValor = 1;
const maiorValor = 200;
const numeroSecreto = gerarNumeroAleatorio(); 

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * maiorValor + 1);
}

console.log(numeroSecreto);

const elementoMenorValor = document.getElementById('menor-valor');
elementoMenorValor.innerHTML = menorValor;

const elementoMaiorValor = document.getElementById('maior-valor');
elementoMaiorValor.innerHTML = maiorValor;










