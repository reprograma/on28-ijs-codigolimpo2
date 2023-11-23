import { Personagem } from "./Personagem.js";

export class Confronto {

    lutar(personagem1, personagem2) {
        const personagem1PoderTotal = personagem1.poderTotal()
        const personagem2PoderTotal = personagem2.poderTotal()

        if (!(personagem1 && personagem1 instanceof Personagem)) {
            console.log("Personagens não econtrados.")
        }
        if (personagem1PoderTotal > personagem2PoderTotal) {
            console.log(`Resultado do confronto: O personagem ${personagem1.nome} venceu!`)
            return 1

        } else if (personagem1PoderTotal < personagem2PoderTotal) {
            console.log(`Resultado do confronto: O personagem ${personagem2.nome} venceu!`)
            return 2
            
        } else {
            personagem1PoderTotal === personagem2PoderTotal
            console.log(`Resultado do confronto: empate!`)
            return 0
        }
    }
}

import { SuperPoder } from "./SuperPoder.js";

export class Personagem {
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
        if (this.#poderes.some((poder) => poder.nomeDoPoder === superPoder.nomeDoPoder)){
            throw (`O poder "${superPoder.nomeDoPoder}" já foi adicionado ao personagem ${this.#nome}`)
        }
        this.#poderes.push(superPoder)
        console.log(`Poder "${superPoder.nomeDoPoder}", de categoria ${superPoder.categoriaDoPoder}, adicionado ao personagem ${this.#nome}!`)
    }

    poderTotal() {
        const totalPoder = this.#poderes.reduce((total, superPoder) => total + superPoder.categoriaDoPoder, 0);
        console.log(`O poder total do personagem ${this.#nome} é ${totalPoder}!`)
        return totalPoder
    }
    
}

export class SuperPoder{
    #nomeDoPoder;
    #categoriaDoPoder;

    constructor(nomeDoPoder, categoriaDoPoder){
        this.#nomeDoPoder = nomeDoPoder;
        this.#categoriaDoPoder = categoriaDoPoder;
    }

    get nomeDoPoder(){
        return this.#nomeDoPoder
    }
    
    get categoriaDoPoder(){
        return this.#categoriaDoPoder
    }

}