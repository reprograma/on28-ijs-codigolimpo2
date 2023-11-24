//refatorar a função com switch do projeto:
https://github.com/reprograma/on28-ijs-projeto1

// criarChavePix(chavePix, tipo){
//     switch (tipo) {
//         case "CPF":
//             let regexCPF = /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/;
//             if (regexCPF.test(chavePix)) {
//                 this.chavesPix.cpf = chavePix
//                 return "Chave Pix por cpf criada com sucesso"
//             } else {
//                 throw new Error("Erro: CPF inválido");
//             }
            
//         case "EMAIL":
//             let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//             if (regexEmail.test(chavePix)) {
//                 this.chavesPix.email = chavePix
//                 return "Chave Pix por email criada com sucesso"
//             } else {
//                 throw new Error("Erro: Email inválido");
//             }

//         case "TELEFONE":
//             let regexTelefone = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/;
//             if (regexTelefone.test(chavePix)) {
//                 this.chavesPix.telefone = chavePix
//                 return "Chave Pix por telefone criada com sucesso"
//             } else {
//                 throw new Error("Erro: Telefone inválido");
//             }

//         default:
//             return "Chave inexistente"
            
//     }

// }


// }


class TipoChavePix {
    #tipoChavePix;
  
    constructor(tipoChavePix) {
      this.#tipoChavePix = tipoChavePix;
      this.chavesPix = {};
    }
  
    getTipoChavePix() {
      return this.#tipoChavePix;
    }
  }
  
  class ChavePixTipoCPF extends TipoChavePix {
    constructor(cpf) {
      super(cpf);
      this.autenticarCPF();
    }
  
    autenticarCPF() {
      let regexCPF =
        /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/;
      if (regexCPF.test(this.getTipoChavePix())) {
        this.chavesPix.cpf = this.getTipoChavePix();
        return "Chave Pix CPF criada com sucesso";
      } else {
        throw new Error("Erro: CPF Inválido");
      }
    }
  }
  
  class ChavePixTipoEmail extends TipoChavePix {
    constructor(email) {
      super(email);
      this.autenticarEmail();
    }
  
    autenticarEmail() {
      let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (regexEmail.test(this.getTipoChavePix())) {
        this.chavesPix.email = this.getTipoChavePix();
        return "Chave Pix EMAIL criada com sucesso";
      } else {
        throw new Error("Erro: email Inválido");
      }
    }
  }
  
  class ChavePixTipoTelefone extends TipoChavePix {
    constructor(telefone) {
      super(telefone);
      this.autenticarTelefone();
    }
  
    autenticarTelefone() {
      let regexTelefone =
        /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/;
      if (regexTelefone.test(this.getTipoChavePix())) {
        this.chavesPix.telefone = this.getTipoChavePix();
        return "Chave Pix TELEFONE criada com sucesso";
      } else {
        throw new Error("Erro: telefone Inválido");
      }
    }
  }
  
  module.exports = { TipoChavePix, ChavePixTipoCPF, ChavePixTipoEmail, ChavePixTipoTelefone };
  