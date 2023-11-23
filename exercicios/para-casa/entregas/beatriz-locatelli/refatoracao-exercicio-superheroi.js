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

    validaSuperPoder(superPoder) {
        if (!(superPoder instanceof SuperPoder)) {
            throw ('SuperPoder não identificado.');
        }
    }

    ultrapassarLimiteDePoderes() {
        return this.#poderes.length >= 5
    }

    poderJaAdicionado(superPoder) {
        return this.#poderes.some((poder) => poder.nomeDoPoder === superPoder.nomeDoPoder)
    }

    //Conceito SOLID:
    //Aplicado o princípio de responsabilidade única;
    adicionaSuperPoder(superPoder) {

        this.validaSuperPoder(superPoder);

        if (this.ultrapassarLimiteDePoderes()) {
            throw (`Não foi possível adicionar mais poderes. Máximo de 5 poderes permitidos.`);
        }

        if (this.poderJaAdicionado(superPoder)) {
            throw `O poder "${superPoder.nomeDoPoder}" já foi adicionado ao personagem ${this.#nome}`;
        }

        this.#poderes.push(superPoder);
        return `Poder "${superPoder.nomeDoPoder}", de categoria ${superPoder.categoriaDoPoder}, adicionado ao personagem ${this.#nome}!`;
    }

    poderTotal() {
        const totalPoder = this.#poderes.reduce((total, superPoder) => total + superPoder.categoriaDoPoder, 0);
        return totalPoder + "" + ` O poder total do personagem ${this.#nome} é ${totalPoder}!`
    }
}

class SuperHeroi extends Personagem {
    constructor(nome, nomeVidaReal) {
        super(nome, nomeVidaReal)
    }

    poderTotal() {
        const totalPoder = super.poderTotal() + (super.poderTotal() * 0.01)
        return totalPoder
    }
}

class Vilao extends Personagem {
    constructor(nome, nomeVidaReal, tempoDePrisao) {
        super(nome, nomeVidaReal)
        this.tempoDePrisao = tempoDePrisao
    }
}

//Conceito SOLID:
//Aplicado o princípio de responsabilidade única;
//O código estava com muitos ifs(fazendo várias tarefas de complexidade alta);
//Desmontei a função lutar() que estava muito longa, guardando valores dentro de consts e depois reutilizando-os;
//Apliquei a boa prática de nomear const de forma descritiva;

class Confronto {

    validaSuperHeroi(heroi) {
        if (!(heroi instanceof SuperHeroi)) {
            throw ('Heroi não identificado.');
        }
    }

    validaVilao(vilao) {
        if (!(vilao instanceof Vilao)) {
            throw ('Vilao não identificado.');
        }
    }

    lutar(heroi, vilao) {

        this.validaSuperHeroi(heroi);
        this.validaVilao(vilao);

        const resultadoHeroiVencedor = heroi.poderTotal() > vilao.poderTotal()
        const resultadoEmpate = heroi.poderTotal() == vilao.poderTotal()

        return resultadoEmpate
            ? "Resultado do confronto: empate"
            : `Resultado do confronto: O personagem ${resultadoHeroiVencedor ? heroi.nome : vilao.nome
            } venceu!`;
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

console.log(heroi1.adicionaSuperPoder(superPoder1))
// console.log(heroi1.adicionaSuperPoder(superPoder2))
console.log(heroi1.adicionaSuperPoder(superPoder3))
console.log(heroi1.adicionaSuperPoder(superPoder4))
console.log(vilao1.adicionaSuperPoder(superPoder5))

console.log(heroi1.poderTotal())
console.log(vilao1.poderTotal())

const confronto1 = new Confronto()
console.log(confronto1.lutar(heroi1, vilao1))



