const arrayNumeros = [1, 5, 2];


const tabuada = (arrayNumeros, callback) => {


    for (let item of arrayNumeros) {
        for (let i = 0; i <= 10; i++) {
            let resultado = item * i;
            callback(`${item}x${i} = ${resultado}`);
            if (i === 10) {
                console.log("-----------------\n")
            }
        }
    }
}

tabuada([1, 5, 2], (resultado) => {
    console.log(resultado)
})
