const prompt = require('prompt-sync')()

function calcularMMC(valorA,valorB) {
    let mmc = 1;

    while (mmc % valorA !== 0 || mmc % valorB !== 0) {
        mmc++;
    }

    return mmc;
}

// Exemplo de uso
const valorA = Number(prompt('Digite o valor de A: '));
const valorB = Number(prompt('Digite o valor de B: '));

const resultadoMMC = calcularMMC(valorA, valorB);

console.log(`O MMC de ${valorA} e ${valorB} é: ${resultadoMMC}`);

