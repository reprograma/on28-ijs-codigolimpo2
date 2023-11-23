function HistoricoMedico() {
  this.consultas = [];
  this.vacinas = [];
  this.procedimentos = [];

  console.log(
    `consultas: ${this.consultas}, vacinas: ${this.vacinas}, procedimentos: ${this.procedimentos}`
  );

  this.vacinar = function vacinar(vacina) {
    this.vacinas.push(vacina);
    console.log(`a vacina ${vacina} foi aplicada`);
  };

  this.consultar = function consultar(consulta) {
    this.consultas.push(consulta);
    this.consultas.sort(function (consultaA, consultaB) {
      return consultaB.data - consultaA.data;
    }, console.log(`a consulta de ${consulta} foi realizada`));
  };

  this.realizarProcedimento = function realizarProcedimento(tipo, motivo) {
    let procedimento = {
      tipo: tipo,
      motivo: motivo,
    };
    this.procedimentos.push(procedimento);
    console.log(`o procedimento ${tipo} foi realizado`);
  };
}

function Gato(nome, idade, cor, castrado) {
  this.nome = nome;
  this.idade = idade;
  this.cor = cor;
  this.castrado = castrado;
  this.historico = new HistoricoMedico();

  this.miar = function miar() {
    console.log(`${this.nome} está miando`);
  };
}

function Cachorro(nome, idade, cor, castrado, raca) {
  this.nome = nome;
  this.idade = idade;
  this.cor = cor;
  this.castrado = castrado;
  this.raca = raca;
  this.historico = new HistoricoMedico();

  this.latir = function latir() {
    console.log(`${this.nome} está latindo`);
  };
}

function AnimalExotico(nome, idade, cor, especie, adulto) {
  this.nome = nome;
  this.idade = idade;
  this.cor = cor;
  this.especie = especie;
  this.adulto = adulto;
  this.historico = new HistoricoMedico();

  this.ehAdulto = function ehAdulto() {
    if (this.especie === "Hamster" && this.idade >= 2) {
      return true;
    } else if (this.especie === "Papagaio" && this.idade >= 36) {
      return true;
    } else if (this.especie === "Calopsita" && this.idade >= 18) {
      return true;
    } else {
      return false;
    }
  };
}

module.exports = { Gato, Cachorro, AnimalExotico, HistoricoMedico };
