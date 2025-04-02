class gato{
    constructor(nome, cor, raca, tamanho){
        this.nome = nome
        this.cor = cor
        this.raca = raca
        this.tamanho = tamanho
    }

        escrever(){
            console.log(`Nome: ${this.nome}\nCor do pelo: ${this.cor}\nRaça: ${this.raca}\nTamanho: ${this.tamanho}\n`)
        }

        ataque(alvo){
            console.log(`${this.nome} ataca ${alvo.nome}`)
        }
}

let leona = new gato ("Leona", "laranja", "vira lata", "adulto")
let mingau = new gato ("Mingau", "Branco e preto", "safado", "velho")

leona.escrever()
mingau.escrever()
mingau.ataque(leona)