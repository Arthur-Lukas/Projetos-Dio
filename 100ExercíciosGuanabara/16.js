/*16) [DESAFIO] Escreva um programa para calcular a redução do tempo de vida de um
fumante. Pergunte a quantidade de cigarros fumados por dias e quantos anos ele
já fumou. Considere que um fumante perde 10 min de vida a cada cigarro. Calcule
quantos dias de vida um fumante perderá e exiba o total em dias.*/

let cigarros = 7
let anosFumados = 2*365
let diasPerdidos = cigarros*anosFumados/144

console.log("Vc fumou tanto que perdeu "+Math.round(diasPerdidos)+" dias de vida")