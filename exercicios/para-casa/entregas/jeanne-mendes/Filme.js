// Nesse exercício estou utilizando o principio da Responsabilidade
// Classes devem fazer apenas uma coisa, e fazer isso bem.

class Filme{
    id;
    titulo;
    codigoDoFilme;
    constructor(id, titulo, codigo){
      this.id = id;
      this.titulo = titulo;
      this.codigoDoFilme = codigo;
    }
    
  }

module.exports = Filme;