/*14) A locadora de carros precisa da sua ajuda para cobrar seus serviços. Escreva
um programa que pergunte a quantidade de Km percorridos por um carro alugado e a
quantidade de dias pelos quais ele foi alugado. Calcule o preço total a pagar,
sabendo que o carro custa R$90 por dia e R$0,20 por Km rodado.*/

let diasAlugado = 10
let kmRodados = 230
let aluguelDiario = 90
let precoPorKm = 0.2
let precoTotalDia = diasAlugado*aluguelDiario
let precoTotalKM = kmRodados*precoPorKm
let precoTotal = precoTotalDia+precoTotalKM

console.log("O cliente utilizou o carro por: "+diasAlugado+" dias\n"+
            "E rodou: "+kmRodados+"km\n"+
            "Preço dos dias: "+precoTotalDia+"\n"+
            `Preço dos kms percorridos: ${precoTotalKM}`+`\n`+
            `Valor total do aluguel: ${precoTotal}`
)