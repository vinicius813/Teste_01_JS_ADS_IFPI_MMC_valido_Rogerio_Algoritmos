/* [q1_MMC.js] MMC (Mínimo Múltiplo Comum) de A e B significa que um dado valor (o MMC) 
pode ser composto em pedaços tanto de tamanhos de A quanto de tamanhos de B. E que ainda
é o menor valor onde isso acontece (pode ser dividido em pedaços exatos de tamanho A ou B).
Elabore um programa que receba os valores de A e B e em seguida encontre o MMC para esses
valores. Utilize a estrutura de repetição WHILE, onde o critério de continuidade é ainda 
não ser divisível simultaneamente por A e B. */

const prompt = require('prompt-sync')()

function main() {
    const valor_a = Number(prompt('Valor A: '))
    const valor_b = Number(prompt('Valor B: '))

    let mmc = valor_b

    while(!(eh_multiplo(mmc,valor_a) && eh_multiplo(mmc,valor_b))) {
        mmc += valor_b
    }

    console.log(`O MMMC de A e B será ${mmc}.`)
    
}

function eh_multiplo(valor_1, valor_2) {
    return (valor_1 % valor_2 === 0)
}

main()