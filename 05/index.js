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