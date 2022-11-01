// Num determinado jogo, cada rodada dura 10 segundos. 
// Faça um programa que imprima o nome de cada jogador em seu devido momento.
// Ao final da rodada, o programa deverá imprimir a mensagem: A rodada terminou

const jogadores = ["Guido", "Dani", "Ruli", "Diego", "Vidal"];
const tempo = (10 / jogadores.length) * 1000;

let index = 0;

const rodada = () => {
    console.log(`${jogadores[index]}, é sua vez de jogar!`)
    index++;
    if (index == jogadores.length) {
        clearInterval(notEnd)
    }
}
const notEnd = setInterval(rodada, tempo);