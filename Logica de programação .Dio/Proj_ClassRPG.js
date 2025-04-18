
class TipoHeroi{
    
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    
    atacar(){

        let tipoDeAtaque =""

        if(this.tipo=="mago"){
            tipoDeAtaque="magia"
        }else if(this.tipo==`guerreiro`){
            tipoDeAtaque="espada"
        }else if(this.tipo=="monge"){
            tipoDeAtaque="artes marciais"
        }else{
            tipoDeAtaque="shuriken"
        }

        console.log(`O ${this.tipo} atacou usando ${tipoDeAtaque}`)
    }
}

let heroi = new TipoHeroi("Arthur", 25, "mago")
let heroi2 = new TipoHeroi("Lorrayne", 23, "guerreiro")

//instancia do objeto criado
heroi.atacar()
heroi2.atacar()