class HistoricoMedico {
  constructor() {
    this.consultas = [];
    this.vacinas = [];
    this.procedimentos = [];
  }
  vacinar(vacina) {
    this.vacinas.push(vacina);
  }
  consultar(consulta) {
    this.consultas.unshift(consulta);
  }
  realizarProcedimento(tipo, motivo) {
    let procedimento = {
      tipo: tipo,
      motivo: motivo,
    };
    this.procedimentos.push(procedimento);
  }
}

class Animal {
  constructor(nome, idade, cor) {
    this.nome = nome;
    this.idade = idade;
    this.cor = cor;
  }
}

class AnimalExotico extends Animal {
  constructor(nome, idade, cor, especie) {
    super(nome, idade, cor);
    this.especie = especie;
    this.historico = new HistoricoMedico();
  }
}

class Gato extends Animal {
  constructor(nome, idade, cor, castrado) {
    super(nome, idade, cor);
    this.castrado = castrado;
    this.historico = new HistoricoMedico();
  }
  miar() {
    console.log(`${this.nome} está miando!`);
  }
}

class Cachorro extends Animal {
  constructor(nome, idade, cor, castrado, raca) {
    super(nome, idade, cor);
    this.castrado = castrado;
    this.raca = raca;
    this.historico = new HistoricoMedico();
  }
  latir() {
    console.log(`${this.nome} está latindo!`);
  }
}

class Hamster extends AnimalExotico {
  constructor(nome, idade, cor, especie) {
    super(nome, idade, cor, especie);
    this.adulto = this.hamsterEhAdulto();
    this.historico = new HistoricoMedico();
  }
  hamsterEhAdulto() {
    return this.idade >= 2 ? "sim" : "não";
  }
}

class Papagaio extends AnimalExotico {
  constructor(nome, idade, cor, especie) {
    super(nome, idade, cor, especie);
    this.adulto = this.papagaioEhAdulto();
    this.historico = new HistoricoMedico();
  }
  papagaioEhAdulto() {
    return this.idade >= 36 ? "sim" : "não";
  }
}

class Calopsita extends AnimalExotico {
  constructor(nome, idade, cor, especie) {
    super(nome, idade, cor, especie);
    this.adulto = this.calopsitaEhAdulto();
    this.historico = new HistoricoMedico();
  }
  calopsitaEhAdulto() {
    return this.idade >= 18 ? "sim" : "não";
  }
}

module.exports = {
  Animal,
  AnimalExotico,
  Gato,
  Cachorro,
  Hamster,
  Papagaio,
  Calopsita,
  HistoricoMedico,
};
