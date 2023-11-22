const {Animal} = require('./Animal');

class Gato extends Animal{
    constructor(nome, idade, cor, castrado) {
        super(nome, idade, cor);
        this.castrado = castrado;
    }

    miar() {
        console.log("miau miauu");
    }
}

const gato = new Gato('jorginho', 24, 'rajado', false);
gato.miar();
gato.historico.aplicarVacina('raiva');
gato.historico.realizarConsulta('25/09/2023');
gato.historico.realizarProcedimento('ultrassom', 'dores');
console.log(gato.historico);