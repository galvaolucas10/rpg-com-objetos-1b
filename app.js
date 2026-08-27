class Personagem {
    constructor(nome, vida, ataque) {
        this.nome = nome
        this.vida = vida
        this.ataque = ataque
    }

    causaDano(personagem) {
        personagem.recebeDano(this.ataque)
    }

    recebeDano(quantidade) {
        this.vida = this.vida - quantidade

        if (this.vida <= 0) {
            this.vida = "morreu"
        }
    }

    estaVivo(){
        return this.vida > 0
    }
    mostrarStatus(){
        console.log(this.nome + " | Vida: " + this.vida)
    }
}

const druida = new Personagem("Obin", 55, 35)
const guerreiro = new Personagem("Thorin", 60, 20)
const mago = new Personagem("Gandalfe", 60, 35)
const arqueiro = new Personagem("Legolas", 80, 25)
const ladrao = new Personagem("Sombra", 50, 40)
const paladino = new Personagem("Uther", 90, 15)
const necromante = new Personagem("Malakor", 55, 35)

mago.causaDano(arqueiro)
mago.causaDano(arqueiro)
druida.causaDano(arqueiro)
arqueiro.mostrarStatus()
console.log(arqueiro.estaVivo())