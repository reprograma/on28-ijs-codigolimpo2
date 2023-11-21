const {HistoricoMedico} = require('./HistoricoMedico');

class Animal{
    constructor(nome, idade, cor){
        this.nome = nome;
        this.idade = idade;
        this.cor = cor;
        this.historico = new HistoricoMedico();
    }
}

module.exports = { Animal }