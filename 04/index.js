let tempoParaAlarmarEmSegundos = 10;
let tempoAlarmandoEmSegundos = 5;
let contador = 0;
const alarme = (tempoProgramado, disparosSonoros) => {

    console.log(`Timer iniciado, disparando alarme em ${tempoParaAlarmarEmSegundos} segundos!`);



    setTimeout(() => {
        const bip = setInterval(() => {
            contador++;
            console.log("Beep, Beep!")
            if (contador == disparosSonoros) {
                clearInterval(bip);

            }

        }, 1000);


    }, tempoProgramado * 1000);


}
alarme(tempoParaAlarmarEmSegundos, tempoAlarmandoEmSegundos);