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
let contador = 0;
const alarme = (tempoProgramado, disparosSonoros) => {

    console.log(`Timer iniciado, disparando alarme em ${tempoParaAlarmarEmSegundos} segundos!`);


    const bip = setInterval(() => {
        contador++;
        if (contador >= tempoProgramado && contador < tempoProgramado + disparosSonoros) {
            console.log("Beep, Beep!")
        } else if (contador == disparosSonoros + tempoProgramado) {
            clearInterval(bip);
        }

    }, 1000);
}
alarme(tempoParaAlarmarEmSegundos, tempoAlarmandoEmSegundos);















// let tempoParaAlarmarEmSegundos = 10;
// let tempoAlarmandoEmSegundos = 5;


// const alarme = (tempototal, intervaloDeAlarme) => {

//     console.log(`Timer iniciado, disparando alarme em ${tempototal} segundos!`)

//     let contador = 0

//     let index = setInterval(() => {
//         contador++
//         if (contador >= tempototal && contador < intervaloDeAlarme + tempototal) {
//             console.log("Beep beep!")
//         }
//         else if (contador == tempototal + intervaloDeAlarme) {
//             clearInterval(index)
//         }
//     }, 1000);


// }

// alarme(tempoParaAlarmarEmSegundos, tempoAlarmandoEmSegundos);
