// Desenvolva um programa que simula um timer simples.

// Logo após iniciar, o seu programa deverá imprimir na tela uma mensagem de início do timer:
//  "Timer iniciado, disparando alarme em X segundos!". 
// Note que X corresponde ao tempo em que o seu programa irá aguardar para enfim despertar.

// O seu programa deverá aguardar o tempo em segundos especificado na variável tempoParaAlarmarEmSegundos,
//  só então irá despertar mostrando repetidamente a mensagem "Beep beep!", uma mensagem a cada segundo, até
//  que o tempo da variável tempoAlarmandoEmSegundos se esgote.

// Após o fim do despertar o seu programa deverá imprimir em tela a mensagem "Soneca ativada, próximo alarme em X segundos", 
// onde X corresponde ao tempo em que o seu programa permanecerá em modo soneca e é determinado pela variável tempoSonecaEmSegundos,
//  passado este tempo o seu programa deverá despertar novamente e assim sucessivamente até que se cumpram o número de sonecas definido
//  na variável numeroDeSonecas.

// Por fim, é necessário imprimir na tela a mensagem "Fim do Timer!" e o programa é finalizado.

// let tempoParaAlarmarEmSegundos = 10;
// let tempoAlarmandoEmSegundos = 5;
// let tempoSonecaEmSegundos = 10;
// let numeroDeSonecas = 2;


// let contador = 0;
// const alarme = (tempoProgramado, disparosSonoros) => {

//     console.log(`Timer iniciado, disparando alarme em ${tempoParaAlarmarEmSegundos} segundos!`);


//     const bip = setInterval(() => {
//         contador++;
//         if (contador >= tempoProgramado && contador < tempoProgramado + disparosSonoros) {
//             console.log("Beep, Beep!")
//         } else if (contador == disparosSonoros + tempoProgramado) {
//             clearInterval(bip);
//         }

//     }, 1000);
// }
// alarme(tempoParaAlarmarEmSegundos, tempoAlarmandoEmSegundos);









let tempoParaAlarmarEmSegundos = 10;
let tempoAlarmandoEmSegundos = 5;
let tempoSonecaEmSegundos = 10;
let numeroDeSonecas = 2;


const alarme = (tempoProgramado, disparosSonoros, soneca, qtdSonecas) => {

    console.log(`Timer iniciado, disparando alarme em ${tempoParaAlarmarEmSegundos} segundos!`);



    setTimeout(() => {
        let contador = 0;
        const bip = setInterval(() => {
            contador++;
            console.log("Beep, Beep!")
            if (contador == disparosSonoros) {
                qtdSonecas && console.log("Função soneca ativada!");
                qtdSonecas && setTimeout(alarme, soneca * 1000, tempoProgramado, disparosSonoros, soneca, qtdSonecas - 1);
                clearInterval(bip);
            }

        }, 1000);


    }, tempoProgramado * 1000);


}
alarme(tempoParaAlarmarEmSegundos, tempoAlarmandoEmSegundos, tempoSonecaEmSegundos, numeroDeSonecas);

// const alarme = (tempototal, intervaloDeAlarme, soneca, tempoSoneca) => {

//     console.log("Timer iniciado, disparando alarme em ${tempototal} segundos!")

//     let contador = 0

//     let index = setInterval(() => {
//         contador++
//         if (contador >= tempototal && contador < intervaloDeAlarme + tempototal) {
//             console.log("Beep beep!")
//         }
//         else if (contador == tempototal + intervaloDeAlarme) {

//             if (soneca == 0) {
//                 console.log("Fim do Timer!");
//                 clearInterval(index)
//             } else {
//                 console.log("Soneca ativada, próximo alarme em ${tempoSoneca} segundos");
//                 contador = 0
//                 soneca--
//             }

//         }
//     }, 1000);


// }

// alarme(tempoParaAlarmarEmSegundos, tempoAlarmandoEmSegundos, numeroDeSonecas, tempoSonecaEmSegundos);

