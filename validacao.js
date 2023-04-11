function verificarSeOChutePossuiUmValorValido(resultFala){

    const numeroInteiro = +resultFala;

    if(verificarTentativa(limiteTentativa)){
        document.body.innerHTML = 
        `<h2>GAME OVER!</h2>
        <span>limite de ${limiteTentativa} tentativas atigindo!</span>
        <button class="btn-jogar" id="jogar-novamente">Jogar</button>`;
    }

    //verifica se não é um número
    if(seOChuteForInvalido(numeroInteiro)){
        elementoChute.innerHTML += '<div>Valor inválido!</div>'
      
    }

    if(numeroMaiorQueOPermitido(numeroInteiro)){
        elementoChute.innerHTML +=  `
        <div>valor invalido: o numero secreto precisa estar
        entre ${menorValor} e ${maiorValor}!</div>`;
      
    }

    if(numeroInteiro === numeroSecreto){
        limiteTentativa = limiteTentativa += 0;
        document.body.innerHTML = 
        `<h2>Você acertou !!</h2>
        <span>O número secreto era ${numeroSecreto}</span>
        <button class="btn-jogar" id="jogar-novamente">Jogar</button>`;

    }else if(numeroInteiro > numeroSecreto){
        limiteTentativa = limiteTentativa += 1;
        console.log(limiteTentativa);
        elementoChute.innerHTML +=  `
        <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>`;
    
    }else {
        limiteTentativa = limiteTentativa += 1;
        console.log(limiteTentativa);
        elementoChute.innerHTML +=  `
        <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>`;
    }
}
function numeroMaiorQueOPermitido(numeroInteiro) {
    return numeroInteiro > maiorValor || numeroInteiro < menorValor;
}

function seOChuteForInvalido(numeroInteiro) {
    return Number.isNaN(numeroInteiro);
}

function verificarTentativa(limiteTentativa){
    return limiteTentativa === 3;
}

document.body.addEventListener('click', (e) => {
    if(e.target.id == 'jogar-novamente'){
        //reload pagina
        window.location.reload();
    }
})

