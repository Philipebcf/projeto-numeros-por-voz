const elementoChute = document.getElementById('chute');

const SpeechRecognition = window.SpeechRecognition || 
webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = 'pt-Br';

recognition.start();

recognition.addEventListener('result', onSpeak)

function onSpeak(evento){
    const resultFala = evento.results[0][0].transcript;
    //console.log(evento);
    exibeResultFalaNaTela(resultFala);
    verificarSeOChutePossuiUmValorValido(resultFala);
}

function exibeResultFalaNaTela(resultFala){

    elementoChute.innerHTML = `
        <div>Você disse:</div>
        <span class="box">${resultFala}</span>
    `;
}

recognition.addEventListener('end', () => {
    recognition.start();
})














