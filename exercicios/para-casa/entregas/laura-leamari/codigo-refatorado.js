class Filme {
  titulo;
  categoria;

  constructor(titulo, categoria) {
    this.titulo = titulo;
    this.categoria = categoria;
  }

  mudarCategoria(novaCategoria) {
    this.categoria = novaCategoria;
  }

  calcularCusto(diasAlugado) {
    return this.categoria.calcularCusto(diasAlugado);
  }
}

class Categoria {
  nome;
  qtdDiasPadrao;
  valorDiasPadrao;
  valorDiasExtra;

  constructor(nome, qtdDiasPadrao, valorDiasPadrao, valorDiasExtra) {
    this.nome = nome;
    this.qtdDiasPadrao = qtdDiasPadrao;
    this.valorDiasPadrao = valorDiasPadrao;
    this.valorDiasExtra = valorDiasExtra;
  }

  calcularCusto(diasAlugado) {
    let custo = this.qtdDiasPadrao * this.valorDiasPadrao;
    if (diasAlugado > this.qtdDiasPadrao) {
      custo += (diasAlugado - this.qtdDiasPadrao) * this.valorDiasExtra;
    }
    return custo;
  }
}

class Aluguel {
  constructor() {
    this.filmesAlugados = [];
  }

  alugarFilme(filme, dias) {
    const custo = filme.calcularCusto(dias);
    this.filmesAlugados.push({ filme, dias, custo });
  }

  calcularCustoTotal() {
    return this.filmesAlugados.reduce((total, aluguel) => total + aluguel.custo, 0);
  }
}

class Cliente {
  nome;
  pontosFidelidade = 0;
  aluguel = new Aluguel();

  constructor(nome) {
    this.nome = nome;
  }

  alugarFilme(filme, dias) {
    this.aluguel.alugarFilme(filme, dias);
    this.pontosFidelidade++;
    if (filme.categoria.nome === "lançamento" && dias > 2) {
      this.pontosFidelidade++;
    }
  }

  obterResumo() {
    const resultado = `Registro de aluguel de ${this.nome}\n`;
    for (const aluguel of this.aluguel.filmesAlugados) {
      resultado += `\t${aluguel.filme.titulo}\t${aluguel.custo}\n`;
    }
    resultado += `A quantia devida é ${this.aluguel.calcularCustoTotal()}\n`;
    resultado += `Você ganhou ${this.pontosFidelidade} pontos de fidelidade\n`;
    return resultado;
  }
}