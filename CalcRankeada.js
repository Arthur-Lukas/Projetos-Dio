let vit = 90
let der = 5

function VitoOuDerro(resultado){
    resultado = vit - der
    
    if (resultado<=10){
        console.log("O jogador obteve um total de "+vit+" vitórias e um total de "+der+" derrotas, então o seu ranking é: "+(resultado="Ferro"))
    }else if((resultado>10)&&(resultado<=20)){
        console.log("O jogador obteve um total de "+vit+" vitórias e um total de "+der+" derrotas, então o seu ranking é: "+(resultado="Bronze"))
    }else if((resultado>20)&&(resultado<=50)){
        console.log("O jogador obteve um total de "+vit+" vitórias e um total de "+der+" derrotas, então o seu ranking é: "+(resultado="Prata"))
    }else if((resultado>50)&&(resultado<=80)){
        console.log("O jogador obteve um total de "+vit+" vitórias e um total de "+der+" derrotas, então o seu ranking é: "+(resultado="Ouro"))
    }else if((resultado>80)&&(resultado<=90)){
        console.log("O jogador obteve um total de "+vit+" vitórias e um total de "+der+" derrotas, então o seu ranking é: "+(resultado="Diamante"))
    }else if((resultado>90)&&(resultado<=100)){
        console.log("O jogador obteve um total de "+vit+" vitórias e um total de "+der+" derrotas, então o seu ranking é: "+(resultado="Lendário"))
    }else{
        console.log("O jogador obteve um total de "+vit+" vitórias e um total de "+der+" derrotas, então o seu ranking é: "+(resultado="Imortal"))
    }
}

VitoOuDerro()