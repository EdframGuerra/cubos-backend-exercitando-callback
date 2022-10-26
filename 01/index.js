// Crie uma função que recebe dois argumentos (um número e uma função callback). 
// A funcão deverá montar uma tabuada de multiplicação, como o exemplo abaixo, referente ao número passado no argumento da função
//  principal. O resultado da tabuada deverá ser passado para a função callback


const tabuada = (numero, callback) => {
    for (let i = 0; i <= 10; i++) {
        let resultado = numero * i;
        callback(`${numero}x${i} = ${resultado}`);
    }
}

tabuada(5, (resultado) => {
    console.log(resultado)
})

