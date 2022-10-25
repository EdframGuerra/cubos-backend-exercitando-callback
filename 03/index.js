// Num determinado jogo, cada rodada dura 10 segundos. 
// Faça um programa que imprima o nome de cada jogador em seu devido momento.
// Ao final da rodada, o programa deverá imprimir a mensagem: A rodada terminou

const jogadores = ["Guido", "Dani", "Ruli", "Diego", "Vidal"];
const tempo = 10000 / jogadores.length;


const jogo = setInterval(() => {
    for (let item of jogadores) {
        console.log(item)
    }
    console.log("A rodada terminou!")
    clearInterval(jogo);
}, tempo);