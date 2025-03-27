function calcDoRanking(vit, der){
    console.log("O herói tem um total de "+vit+" vitórias")
    return vit-der
}

let resultado = calcDoRanking(50 ,5)

if(resultado<10){
    resultado = "Ferro"
}else if((resultado>10)&&(resultado<=20)){
    resultado = "Bronze"
}else if((resultado>20)&&(resultado<=50)){
    resultado = "Prata"
}else if((resultado>50)&&(resultado<=80)){
    resultado = "Ouro"
}else if((resultado>80)&&(resultado<=90)){
    resultado = "Diamante"
}else if((resultado>90)&&(resultado<=100)){
    resultado = "Lendário"
}else if(resultado>100){
    resultado = "Imortal"
}else{
    resultado = "--Valor incorreto--"
}

console.log("Ele está no nível de "+resultado)