let exp = 5000
let classe = ["ferro", "bronze", "prata", "ouro", "platina", "diamante","desafiante","lendário"]

if(exp<=1000){
    console.log("O nível de exp do heroí é "+exp+", e sua classe é "+ classe[0])
}else if((exp>1000)&&(exp<=2000)){
    console.log("O nível de exp do heroí é "+exp+", e sua classe é "+ classe[1])
}else if((exp>2000)&&(exp<=5000)){
    console.log("O nível de exp do heroí é "+exp+", e sua classe é "+ classe[2])
}else if((exp>5000)&&(exp<=7000)){
    console.log("O nível de exp do heroí é "+exp+", e sua classe é "+ classe[3])
}else if((exp>7000)&&(exp<=8000)){
    console.log("O nível de exp do heroí é "+exp+", e sua classe é "+ classe[4])
}else if((exp>8000)&&(exp<=9000)){
    console.log("O nível de exp do heroí é "+exp+", e sua classe é "+ classe[5])
}else if((exp>9000)&&(exp<=10000)){
    console.log("O nível de exp do heroí é "+exp+", e sua classe é "+ classe[6])
}else{
    console.log("O nível de exp do heroí é "+exp+", e sua classe é "+ classe[7])
}