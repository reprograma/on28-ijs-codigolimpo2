class Consulta {
  constructor(data) {
    this.data = data;
    console.log(`A consulta foi realizada na data ${data}`);
  }
}

class Vacina {
  constructor(nome) {
    this.nome = nome;
    console.log(`A vacina ${nome} foi aplicada`);
  }
}

class Procedimento {
  constructor(tipo, motivo) {
    this.tipo = tipo;
    this.motivo = motivo;
    console.log(`O procedimento ${tipo} foi realizado`);
  }
}

class HistoricoMedico {
  constructor() {
    this.consultas = [];
    this.vacinas = [];
    this.procedimentos = [];
  }

  registrarConsulta(consulta) {
    this.consultas.push(consulta);
    this.consultas.sort(
      (consultaA, consultaB) => consultaB.data - consultaA.data
    );
  }

  registrarVacina(vacina) {
    this.vacinas.push(vacina);
  }

  registrarProcedimento(procedimento) {
    this.procedimentos.push(procedimento);
  }
}

class Animal {
  constructor(nome, idade, cor, castrado, historicoMedico) {
    this.nome = nome;
    this.idade = idade;
    this.cor = cor;
    this.castrado = castrado;
    this.historico = historicoMedico;
  }

  registrarConsulta(data) {
    const consulta = new Consulta(data);
    this.historico.registrarConsulta(consulta);
  }

  registrarVacina(nome) {
    const vacina = new Vacina(nome);
    this.historico.registrarVacina(vacina);
  }

  registrarProcedimento(tipo, motivo) {
    const procedimento = new Procedimento(tipo, motivo);
    this.historico.registrarProcedimento(procedimento);
  }
}

class AnimalExotico extends Animal {
  constructor(nome, idade, cor, especie, adulto, historicoMedico) {
    super(nome, idade, cor, false, historicoMedico);
    this.especie = especie;
    this.adulto = adulto;
  }

  ehAdulto() {
    if (this.especie === "Hamster" && this.idade >= 2) {
      return true;
    } else if (this.especie === "Papagaio" && this.idade >= 36) {
      return true;
    } else if (this.especie === "Calopsita" && this.idade >= 18) {
      return true;
    } else {
      return false;
    }
  }
}

class Gato extends Animal {
  miar() {
    console.log(`${this.nome} está miando`);
  }
}

class Cachorro extends Animal {
  constructor(nome, idade, cor, castrado, raca, historicoMedico) {
    super(nome, idade, cor, castrado, historicoMedico);
    this.raca = raca;
  }

  latir() {
    console.log(`${this.nome} está latindo`);
  }
}

// Exemplo de uso:
const historicoMedico = new HistoricoMedico();
const gato = new Gato("Tom", 3, "Cinza", true, historicoMedico);
gato.registrarConsulta("2023-01-01");
gato.miar();

const cachorro = new Cachorro(
  "Buddy",
  2,
  "Marrom",
  false,
  "Golden Retriever",
  historicoMedico
);
cachorro.registrarVacina("Antirrábica");
cachorro.latir();
