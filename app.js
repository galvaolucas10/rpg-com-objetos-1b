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
}

const druida = new personagem("Obin", 55, 35)
const guerreiro = new personagem("Thorin", 60, 20)
const mago = new personagem("Gandalfe", 60, 35)
const arqueiro = new personagem("Legolas", 80, 25)
const ladrao = new personagem("Sombra", 50, 40)
const paladino = new personagem("Uther", 90, 15)
const necromante = new personagem("Malakor", 55, 35)