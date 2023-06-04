const tabuada = (numero, callback) => {
    for (let i = 0; i <= 10; i++) {
        let resultado = numero * i;
        callback(`${numero}x${i} = ${resultado}`);
    }
}

tabuada(5, (resultado) => {
    console.log(resultado)
})

