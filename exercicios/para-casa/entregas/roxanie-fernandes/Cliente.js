class Cliente {
  nome;
  pontosDeFidelidade = 0;

  constructor(nome) {
    this.nome = nome;
  }

  adicionarPontosDeFidelidade (){}
}

module.exports = Cliente;

// const cliente1 = new Cliente ("Roxanie")
// console.log(cliente1);