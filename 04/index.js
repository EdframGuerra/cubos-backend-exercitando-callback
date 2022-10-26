// Desenvolva um programa que simula um timer simples.

// Logo após iniciar, o seu programa deverá imprimir na tela uma mensagem de início do timer:
//  "Timer iniciado, disparando alarme em X segundos!". 
// Note que X corresponde ao tempo em que o seu programa irá aguardar para enfim despertar.

// O seu programa deverá aguardar o tempo em segundos especificado na variável tempoParaAlarmarEmSegundos,
//  só então irá despertar mostrando repetidamente a mensagem "Beep beep!", uma mensagem a cada segundo, até
//  que o tempo da variável tempoAlarmandoEmSegundos se esgote.

// Por fim, o programa é finalizado.

let tempoParaAlarmarEmSegundos = 10;
let tempoAlarmandoEmSegundos = 5;

// for (let i = 0; i <= 10; i++) {
//     let resultado = numero * i;
//     callback(`${numero}x${i} = ${resultado}`);
// }


setTimeout(() => {
    console.log(`Timer iniciado, disparando alarme em ${tempoParaAlarmarEmSegundos} segundos!`)
}, 0)
const alarme = setInterval(() => {
    for (let i = 1; i <= tempoAlarmandoEmSegundos; i++) {
        console.log("Beep beep!")
        clearInterval(alarme)
    }
}, tempoParaAlarmarEmSegundos * 1000);


