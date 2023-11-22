class ContaBancaria {
  constructor(titular, saldo, limiteDaConta) {
    this.titular = titular;
    this.saldo = saldo;
    this.limiteDaConta = limiteDaConta;
    this.limiteAtivo = true;
  }

  consultarSaldo() {
    return this.saldo;
  }

  realizarSaque(valor) {
    if (valor > this.saldo) {
      if (this.limiteAtivo == false) {
        throw new Error("Saldo insuficiente");
      }
      if (valor > this.saldo + this.limiteDaConta) {
        throw new Error("Saldo e limite insuficientes");
      }
    }
    this.saldo -= valor;
  }

  realizarDeposito(valor) {
    if (valor < 0) {
      throw new Error("Valor para depósito precisa ser positivo");
    }
    this.saldo += valor;
  }

  reajustarLimite(novoLimite) {
    if (novoLimite < 0) {
      throw new Error("Valor do limite não pode ser negativo");
    }
    this.limiteDaConta = novoLimite;
  }

  ativarLimite() {
    this.limiteAtivo = true;
  }

  desativarLimite() {
    this.limiteAtivo = false;
  }
}

const contaBancaria1 = new ContaBancaria("Anderson", 50000, 160000);
console.log(contaBancaria1.saldo);
console.log(ContaBancaria.chuchu);

ContaBancaria.chuchu = "legumes";

const contaBancaria2 = new ContaBancaria("Anderson", 50000999, 160000999);
console.log(contaBancaria2.saldo);
console.log(ContaBancaria.chuchu);
