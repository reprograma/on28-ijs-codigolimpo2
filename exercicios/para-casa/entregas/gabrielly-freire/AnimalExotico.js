const { Animal } = require('./Animal');

class AnimalExotico extends Animal{
    constructor(nome, idade, cor, especie) {
        super(nome, idade, cor);
        this.especie = especie;
    }

    ehAdulto() {
        return ( 
            (this.especie === 'hamster' && this.idade >= 2) ||
            (this.especie === 'papagaio' && this.idade >= 36) ||
            (this.especie === 'calopsita' && this.idade >= 18) 
        );
    }

    exibirMensagemEAdulto(){
        if (this.ehAdulto()) console.log(`O ${this.especie} é adulto`);
        else console.log(`O ${this.especie} não é adulto, pois possui apenas ${this.idade} mes(es)`);
    }
}

const hamster = new AnimalExotico('kevin', 2, 'marrom', 'hamster');
console.log(hamster);
hamster.exibirMensagemEAdulto();
hamster.historico.aplicarVacina('v8');
hamster.historico.realizarConsulta('15/09/2023');
hamster.historico.realizarProcedimento('ultrassom', 'dores');
console.log(hamster.historico);