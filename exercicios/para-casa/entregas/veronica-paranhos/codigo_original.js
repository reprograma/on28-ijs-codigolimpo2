//função construtora Histórico Médico e seus métodos

function HistoricoMedico() {
  this.consultas = [];
  this.vacinas = [];
  this.procedimentos = [];
}

HistoricoMedico.prototype.vacinar = function (vacina) {
  this.vacinas.push(vacina);
};

HistoricoMedico.prototype.consultar = function (consulta) {
  this.consultas.unshift(consulta);
};

HistoricoMedico.prototype.realizarProcedimento = function (tipo, motivo) {
  let procedimento = {
    tipo: tipo,
    motivo: motivo,
  };
  this.procedimentos.push(procedimento);
};

//função construtora Gato e seus métodos

function Gato(nome, idade, cor, castrado) {
  this.nome = nome;
  this.idade = idade;
  this.cor = cor;
  this.castrado = castrado;
  this.historico = new HistoricoMedico();
}

Gato.prototype.miar = function () {
  console.log(`${this.nome} está miando!`);
};

//função construtora Cachorro e seus métodos
function Cachorro(nome, idade, cor, castrado, raca) {
  this.nome = nome;
  this.idade = idade;
  this.cor = cor;
  this.castrado = castrado;
  this.raca = raca;
  this.historico = new HistoricoMedico();
}

Cachorro.prototype.latir = function () {
  console.log(`${this.nome} está latindo!`);
};

//função construtora Animal Exõtico e seus métodos
function AnimalExotico(nome, idade, cor, especie) {
  this.nome = nome;
  this.idade = idade;
  this.cor = cor;
  this.especie = especie;
  this.adulto = this.ehAdulto();
  this.historico = new HistoricoMedico();
}

AnimalExotico.prototype.ehAdulto = function () {
  if (this.especie === "Hamster" && this.idade >= 2) return true;
  if (this.especie === "Papagaio" && this.idade >= 36) return true;
  if (this.especie === "Calopsita" && this.idade >= 18) return true;

  return false;
};

module.exports = { Gato, Cachorro, AnimalExotico, HistoricoMedico };
