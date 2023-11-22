const { Conta } = require('./ContaModificada');

class Pix {
    #saldo;

    constructor(saldo) {
        this.#saldo = saldo;
    }

    criarChavePix(chavePix, tipo) {
        const regexMap = {
            "CPF": /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/,
            "EMAIL": /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "TELEFONE": /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/,
        };

        if (regexMap[tipo] && regexMap[tipo].test(chavePix)) {
            this.chavesPix[tipo.toLowerCase()] = chavePix;
            return `Chave Pix por ${tipo.toLowerCase()} criada com sucesso`;
        } else {
            throw new Error(`Erro: ${tipo} inválido`);
        }
    }

    transferenciaPorPix(valor, chavePix, tipo) {
        let contaValida = Conta.listaContas.find((conta)=> conta.chavesPix[tipo]=== chavePix)

        if(!contaValida){
            throw new Error("Chave PIX não encontrada")
        }
        if(valor <= 0){
            throw new Error("Valor inválido para transferência")
        }
        if(valor > this.#saldo){
            throw new Error("Saldo insuficiente")
        }
        if(this.#saldo - valor > 0){
            const saldoAtualizado = this.#saldo - valor;
            this.setSaldo(saldoAtualizado);
            const saldoContaReceptora = contaValida.getSaldo() + valor
            contaValida.setSaldo(saldoContaReceptora);
            return "Tranferencia realizada via Pix"
        }
    }
}

