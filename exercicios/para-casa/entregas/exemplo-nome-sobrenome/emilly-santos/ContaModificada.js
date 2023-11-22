class Conta{
    #agencia;
    #conta;
    #saldo;
    static listaContas = [];

    constructor(agencia, conta, saldo){
        this.#agencia = agencia;
        this.#conta = conta;
        this.#saldo = saldo;
        
        Conta.listaContas.push(this)
    }

    destruir(){
        let i = Conta.listaContas.indexOf(this);
        Conta.listaContas.splice(i, 1)
    }

    criarConta(agencia, conta, saldo){
        if(agencia.length === 4 && conta.length === 5 && saldo > 0){
            this.#agencia = agencia;
            this.#conta = conta;
            this.#saldo = saldo;
        
            return "Conta criada com sucesso";
        } else {
             throw new Error("Dados inválidos para cadastro");
        }
    }

    sacar(valor){
        if(valor > 0 && typeof valor === "number"){
            if(this.#saldo - valor > 0){
                const saldoAtualizado = this.#saldo - valor;
                this.setSaldo(saldoAtualizado)
            } else {
                throw new Error("Saldo insuficiente")
            }
        } else{
            throw new Error("Valor inválido para saque")
        }
    }

    depositar(valor){
        if(valor > 0 && typeof valor === "number"){
            const saldoAtualizado = this.#saldo + valor;
            this.setSaldo(saldoAtualizado)
        }else{
            throw new Error("Valor inválido para depósito")
        }
    }

    transferir(valor, agencia, conta){
        let contaValida = Conta.listaContas.find( contaReceptora => {
            let numeroContaReceptora = contaReceptora.getConta();
            let numeroAgenciaReceptora = contaReceptora.getAgencia();
            return numeroContaReceptora === conta && numeroAgenciaReceptora === agencia;
        })

        if(!contaValida){
            throw new Error("Conta não encontrada")
        }

        if(valor < 0){
            throw new Error("Valor inválido para transferencia")
        }

        if(this.#saldo - valor > 0){
            const saldoAtualizado = this.#saldo - valor;
            this.setSaldo(saldoAtualizado);
            const saldoContaReceptora = contaValida.getSaldo() + valor
            contaValida.setSaldo(saldoContaReceptora);
            return "Tranferencia realizada"
        }
    }

    getAgencia(){
        return this.#agencia;
    }

    setAgencia(novaAgencia){
        this.#agencia = novaAgencia;
    }

    getConta(){
        return this.#conta;
    }

    setConta(novaConta){
        this.#conta = Conta;
    }

    getSaldo(){
        return this.#saldo;
    }

    setSaldo(novoSaldo){
        this.#saldo = novoSaldo;
    }
}

module.exports = Conta