class OperacaoBancaria {
  executar(conta, valor) {}
}

class Saque extends OperacaoBancaria {
  executar(conta, valor) {
    if (valor > 0 && valor <= conta.saldo + conta.limiteDaConta) {
      conta.saldo -= valor;
      return true;
    } else {
      console.log("Operação de saque não foi bem-sucedida");
      return false;
    }
  }
}

class Deposito extends OperacaoBancaria {
  executar(conta, valor) {
    if (valor > 0) {
      conta.saldo += valor;
      return true;
    } else {
      console.log("Operação de depósito não foi bem-sucedida");
      return false;
    }
  }
}

class ReajusteLimite extends OperacaoBancaria {
  executar(conta, novoLimite) {
    if (novoLimite >= 0) {
      conta.limiteDaConta = novoLimite;
      return true;
    } else {
      console.log("Operação de reajuste de limite não foi bem-sucedida");
      return false;
    }
  }
}

class LimiteConta extends OperacaoBancaria {
  executar(conta, ativar) {
    conta.limiteAtivo = ativar;
    console.log(`Limite ${ativar ? "ativado" : "desativado"}`);
  }
}

class ContaBancaria {
  constructor(titular, saldo, limiteDaConta) {
    this.titular = titular;
    this.saldo = saldo;
    this.limiteDaConta = limiteDaConta;
    this.limiteAtivo = false;
  }

  consultarSaldo() {
    return this.saldo;
  }

  realizarOperacao(operacao, valor) {
    return operacao.executar(this, valor);
  }
}

const conta = new ContaBancaria("Larissa Gnandt", 1000, 500);

console.log("Saldo inicial:", conta.consultarSaldo());

conta.realizarOperacao(new Deposito(), 200);
console.log("Saldo após depósito:", conta.consultarSaldo());

conta.realizarOperacao(new Saque(), 300);
console.log("Saldo após saque:", conta.consultarSaldo());

conta.realizarOperacao(new ReajusteLimite(), 700);
console.log("Novo limite:", conta.limiteDaConta);

conta.realizarOperacao(new LimiteConta(), true);
console.log("Limite ativado:", conta.limiteAtivo);

conta.realizarOperacao(new LimiteConta(), false);
console.log("Limite desativado:", conta.limiteAtivo);
