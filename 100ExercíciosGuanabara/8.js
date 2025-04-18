/*8) Desenvolva um programa que leia uma distância em metros e mostre os valores relativos em outras medidas.
Ex: Digite uma distância em metros: 185.72
A distância de 185.7m 
corresponde a: 0.18572Km
1.8572Hm
18.572Dam
1857.2dm
18572.0cm
185720.0mm*/ 

let metros = 255.8
console.log(metros+"m\n"+
metros/1000+"km\n"+
metros/100+"hm\n"+
metros/10+"dam\n"+
metros*10+"dm\n"+
metros*100+"cm\n"+
metros*1000+"mm"
)