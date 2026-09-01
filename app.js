class Personagem {
    constructor(nome, vida, ataque, defesa) {
        this.nome = nome,
        this.vida = vida,
        this.vidaMax = vida,
        this.ataque = ataque,
        this.defesa = defesa
    }

    curar(quantidade){
        this.vida = this.vida + quantidade

        if(this.vida > this.vidaMax){
            this.vida = this.vidaMax
        }
    }

    causaDano(personagem) {
        personagem.recebeDano(this.ataque)
    }

    recebeDano(quantidade) {
        let dano = quantidade - this.defesa

    if(quantidade < this.defesa) {
        dano = 0
    }

    this.vida = this.vida - dano

    if (this.vida <= 0) {
            this.vida = "morreu"
    }        
    }

    estaVivo(){
        return this.vida > 0
    }

    mostraStatus(){
        console.log(this.nome + " | vida: " + this.vida)
    }
}

class Guerreiro extends Personagem {
    golpePesado(personagem){
        personagem.recebeDano(this.ataque * 2)
    }
}

const druida = new Personagem("Obin", 150, 15)
const guerreiro = new Guerreiro("Thorin", 60, 20)
const mago = new Personagem("Gandalfe", 60, 35)
const arqueiro = new Personagem("Legolas", 80, 25, 12)

guerreiro.golpePesado(arqueiro)

arqueiro.mostraStatus()

