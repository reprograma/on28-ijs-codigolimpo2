class Locadora {
  constructor() {
    this.catalogo = [];
  }
  adicionarFilme(filme) {
    this.catalogo.push(filme);
  }
}

class Categoria {
  constructor(nome, qtdDiasPadrao, valorDiasPadrao, valorDiasExtra, pontosFidelidade) {
    this.nome = nome;
    this.qtdDiasPadrao = qtdDiasPadrao;
    this.valorDiasPadrao = valorDiasPadrao;
    this.valorDiasExtra = valorDiasExtra;
    this.pontosFidelidade = pontosFidelidade;
  }

  calcularCusto(qtdDias) {
    let custo = this.valorDiasPadrao;
    if (qtdDias > this.limiteDiasPadrao) {
      custo += (qtdDias - this.limiteDiasPadrao) * this.valorDiasExtra;
    }
    return custo;
  }
  
  calcularPontosFidelidade(qtdDias) {
    return qtdDias > this.limiteDiasPadrao ? this.pontosFidelidade : 1;
  }
}

class Filme {
  constructor(titulo, categoria) {
    this.titulo = titulo;
    this.categoria = categoria;
  }
}

class Aluguel {
  constructor(qtdDias) {
    this.qtdDias = qtdDias;
    this.filmesAlugados = [];
    this.custoTotal = 0;
  }

  calcularCusto() {
    return this.filme.categoria.calcularCusto(this.qtdDias);
  }

  calcularPontosFidelidade() {
    return this.filme.categoria.calcularPontosFidelidade(this.qtdDias);
  }
}

class Cliente {
  constructor(nome) {
    this.nome = nome;
    this.historicoAlugueis = [];
  }
}