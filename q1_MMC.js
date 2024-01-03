/* [q1_MMC.js] MMC (Mínimo Múltiplo Comum) de A e B significa que um dado valor (o MMC) 
pode ser composto em pedaços tanto de tamanhos de A quanto de tamanhos de B. E que ainda
é o menor valor onde isso acontece (pode ser dividido em pedaços exatos de tamanho A ou B).
Elabore um programa que receba os valores de A e B e em seguida encontre o MMC para esses
valores. Utilize a estrutura de repetição WHILE, onde o critério de continuidade é ainda 
não ser divisível simultaneamente por A e B. */

const prompt = require('prompt-sync')()

function mmc(valor_a, valor_b) {

    let resto, valor_1, valor_2

    valor_1 = valor_a
    valor_2 = valor_b

    do {
        resto = valor_1 % valor_2
        valor_1 = valor_2
        valor_2 = resto
    } while (resto != 0)

    return (valor_a * valor_b) / valor_1
}

function main() {
    let valor_a = Number(prompt('Valor do 1º número: '))
    let valor_b = Number(prompt('Valor do 2º número: '))

    console.log(`V1 => MMC(${valor_a}, ${valor_b}) = ${mmc(valor_a, valor_b)}`)

    // V2

    let mmc_V2 = valor_b;

    while (!(eh_multiplo(mmc_V2, valor_a) && eh_multiplo(mmc_V2, valor_b))) {
        mmc_V2 += valor_b
    }
    
    console.log(`V2 => MMC(${valor_a}, ${valor_b}) = ${mmc_V2}`)

}
    function eh_multiplo(n, m) {
        return n % m === 0
    }

main()