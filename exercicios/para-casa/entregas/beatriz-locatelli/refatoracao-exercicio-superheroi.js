class SuperPoder {
    #nomeDoPoder;
    #categoriaDoPoder;

    constructor(nomeDoPoder, categoriaDoPoder) {
        this.#nomeDoPoder = nomeDoPoder;
        this.#categoriaDoPoder = categoriaDoPoder;
    }

    get nomeDoPoder() {
        return this.#nomeDoPoder
    }

    get categoriaDoPoder() {
        return this.#categoriaDoPoder
    }
}

class Personagem {
    #nome;
    #nomeVidaReal;
    #poderes = [];

    constructor(nome, nomeVidaReal) {
        this.#nome = nome;
        this.#nomeVidaReal = nomeVidaReal;
    }

    get nome() {
        return this.#nome
    }

    get nomeVidaReal() {
        return this.#nomeVidaReal
    }

    adicionaSuperPoder(superPoder) {

        if (!(superPoder instanceof SuperPoder)) {
            throw ('superPoder não é uma instância de SuperPoder');
        }
        if (this.#poderes.length > 3) {
            throw ('Não é possível adicionar mais poderes á esse personagem.');
        }
        if (this.#poderes.some((poder) => poder.nomeDoPoder === superPoder.nomeDoPoder)) {
            throw (`O poder "${superPoder.nomeDoPoder}" já foi adicionado ao personagem ${this.#nome}`)
        }
        this.#poderes.push(superPoder)
        console.log(`Poder "${superPoder.nomeDoPoder}", de categoria ${superPoder.categoriaDoPoder}, adicionado ao personagem ${this.#nome}!`)
    }

    poderTotal() {
        const totalPoder = this.#poderes.reduce((total, superPoder) => total + superPoder.categoriaDoPoder, 0);
        return totalPoder
    }
}

class SuperHeroi extends Personagem {
    constructor(nome, nomeVidaReal) {
        super(nome, nomeVidaReal)
    }

    poderTotal() {
        const totalPoder = super.poderTotal() + (super.poderTotal() * 0.01)
        return (`O poder total do personagem ${this.nome} é ${totalPoder}!`)
    }
}

class Vilao extends Personagem {
    constructor(nome, nomeVidaReal, tempoDePrisao) {
        super(nome, nomeVidaReal)
        this.tempoDePrisao = tempoDePrisao
    }

    poderTotal() {
        const totalPoder = super.poderTotal()
        return (`O poder total do personagem ${this.nome} é ${totalPoder}!`)
    }
}

//Conceito SOLID:
//Aplicado o princípio de responsabilidade única;
//O código estava com muitos ifs(fazendo várias tarefas de complexidade alta);
//Desmontei a função lutar() que estava muito longa, guardando valores dentro de consts e depois reutilizando-os;
//Apliquei a boa prática de nomear const de forma descritiva;

class Confronto {

    lutar(heroi, vilao) {
        let resultadoHeroiVencedor = heroi.poderTotal() > vilao.poderTotal()
        let resultadoEmpate = heroi.poderTotal() == vilao.poderTotal()

        if (!(heroi instanceof SuperHeroi && vilao instanceof Vilao)) {
            return "Personagens não econtrados."
        }
        try {
            return resultadoHeroiVencedor == true ? `Resultado do confronto: O personagem ${heroi.nome} venceu!`
                : `Resultado do confronto: O personagem ${vilao.nome} venceu!`
        } catch {
            return resultadoEmpate == true ? `Resultado do confronto: empate`
                : ""
        }
    }
}

const superPoder1 = new SuperPoder("soltar teias", 3)
console.log(superPoder1.nomeDoPoder)
console.log(superPoder1.categoriaDoPoder)
// const superPoder2 = new SuperPoder("andar em paredes", 2)
const superPoder3 = new SuperPoder("sentido apurado", 1)
const superPoder4 = new SuperPoder("andar em paredes", 2)
const superPoder5 = new SuperPoder("força", 5)

const heroi1 = new SuperHeroi("Homem-Aranha", "Peter Park")
const vilao1 = new Vilao("Duende-Verde", "Norman Osbourne", 5)
console.log(heroi1.nome)
console.log(heroi1.nomeVidaReal)

heroi1.adicionaSuperPoder(superPoder1)
// heroi1.adicionaSuperPoder(superPoder2)
heroi1.adicionaSuperPoder(superPoder3)
// heroi1.adicionaSuperPoder(superPoder4)
vilao1.adicionaSuperPoder(superPoder5)

console.log(heroi1.poderTotal())
console.log(vilao1.poderTotal())

const confronto1 = new Confronto()
console.log(confronto1.lutar(heroi1, vilao1))



