const {Animal} = require('./Animal');

class Cachorro extends Animal{
    constructor(nome, idade, cor, castrado, raca) {
        super(nome, idade, cor);
        this.castrado = castrado;
        this.raca = raca;
    }

    latir() {
        console.log("au au au");
    }
}

const cachorro = new Cachorro('pingo', 120, 'caramelo', false, 'vira-lata');
cachorro.latir();
cachorro.historico.aplicarVacina('raiva');
cachorro.historico.realizarConsulta('10/09/2023');
cachorro.historico.realizarConsulta('22/09/2023');
cachorro.historico.realizarProcedimento('ultrassom', 'dores');
console.log(cachorro.historico);