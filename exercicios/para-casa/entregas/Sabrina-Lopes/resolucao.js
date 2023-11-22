//CÓDIGO REFATORADO, USANDO O PRÍNCIPIO DA RESPONSABILIDADE ÚNICA

class Cliente {
  constructor(nome) {
    this.nome = nome;
    this.historicoAlugueis = [];
  }
}

class AluguelService {
  calcularAluguel(filmesAlugados) {
    let quantiaTotal = 0;
    let pontosFidelidade = 0;
    let resultado = `Registro de aluguel de ${cliente.nome}\n`;

    for (let r of filmesAlugados) {
      let quantiaFilme = r.calcularCusto();

      // adiciona pontos de fidelidade
      pontosFidelidade += r.calcularPontosFidelidade();

      // resultados para esse filme
      resultado += `\t${r.titulo}\t${quantiaFilme}\n`;
      quantiaTotal += quantiaFilme;
    }

    
    resultado += `A quantia devida é ${quantiaTotal}\n`;
    resultado += `Você ganhou ${pontosFidelidade} pontos de fidelidade\n`;

    return resultado;
  }
}

class Locadora {
  constructor() {
    this.catalogo = [];
  }

  adicionarFilme(filme) {
    this.catalogo.push(filme);
  }
}

class Filme {
  constructor(titulo, categoria) {
    this.titulo = titulo;
    this.categoria = categoria;
  }
}

class Aluguel {
  constructor(filme, qtdDias) {
    this.filme = filme;
    this.qtdDias = qtdDias;
  }

  calcularCusto() {
    return this.filme.categoria.calcularCusto(this.qtdDias);
  }

  calcularPontosFidelidade() {
    return this.filme.categoria.calcularPontosFidelidade(this.qtdDias);
  }
}

class Categoria {
  constructor(nome, valorDiasPadrao, valorDiasExtra, limiteDiasPadrao, pontosFidelidade) {
    this.nome = nome;
    this.valorDiasPadrao = valorDiasPadrao;
    this.valorDiasExtra = valorDiasExtra;
    this.limiteDiasPadrao = limiteDiasPadrao;
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

// Exemplo de uso:
const locadora = new Locadora();
const categoriaRegular = new Categoria("regular", 2, 1.5, 2, 1);
const filmeRan = new Filme("Ran", categoriaRegular);
locadora.adicionarFilme(filmeRan);

const cliente = new Cliente("João");
const aluguel = new Aluguel(filmeRan, 3);
cliente.historicoAlugueis.push(aluguel);

const aluguelService = new AluguelService();
const resumoAluguel = aluguelService.calcularAluguel(cliente.historicoAlugueis);
console.log(resumoAluguel);

/*CÓDIGO LOCADORA ORIGINAL

var Aluguel = function () {};

Aluguel.prototype.resumo = function (cliente) {
  var filmes = {
    F001: { titulo: "Ran", codigo: "regular" },
    F002: { titulo: "Trois Couleurs: Bleu", codigo: "regular" },
    F003: { titulo: "Cars 2", codigo: "infantil" },
    F004: { titulo: "Latest Hit Release", codigo: "lançamento" },
  };

  let quantiaTotal = 0;
  let pontosFidelidade = 0;
  let resultado = `Registro de aluguel de ${cliente.name}\n`;
  for (let r of cliente.alugueis) {
    let filme = filmes[r.filmeID];
    let quantiaFilme = 0;

    // determina quantia para cada filme
    switch (filme.codigo) {
      case "regular":
        quantiaFilme = 2;
        if (r.dias > 2) {
          quantiaFilme += (r.dias - 2) * 1.5;
        }
        break;
      case "lançamento":
        quantiaFilme = r.dias * 3;
        break;
      case "infantil":
        quantiaFilme = 1.5; // 50 centavos/dia
        if (r.dias > 3) {
          quantiaFilme += (r.dias - 3) * 1.5;
        }
        break;
    }

    // adiciona pontos de fidelidade
    pontosFidelidade++;
    // adiciona pontos bônus caso fique com um lançamento por até dois dias
    if (filme.codigo === "lançamento" && r.dias > 2) pontosFidelidade++;

    // escreve os resultados para esse filme
    resultado += `\t${filme.title}\t${quantiaFilme}\n`;
    quantiaTotal += quantiaFilme;
  }
  // escreve os rodapés
  resultado += `A quantia devida é ${quantiaTotal}\n`;
  resultado += `Você ganhou ${pontosFidelidade} pontos de fidelidade\n`;

  return resultado;
};

// EXERCÍCIO EM SALA

class Locadora {
  constructor() {
    this.catalogo = [];
  }

  adicionarFilme(titulo, categoria) {
    const novoFilme = new Filme(titulo, categoria);
    this.catalogo.push(novoFilme);
  }
}

class Filme {
  constructor(titulo, categoria) {
    this.titulo = titulo;
    this.categoria = categoria;
  }

  mudarCategoria(novaCategoria) {
    this.categoria = novaCategoria;
  }

  custoTotalPorFilme(diasAlugado) {
    return (
      this.custoTempoPadrao(diasAlugado) + this.custoTempoExtra(diasAlugado)
    );
  }

  custoTempoPadrao() {
    return custoTotal - totalDesconto;
  }

  custoTempoExtra() {}

  calcular;
}

class Cliente {
  constructor(nome) {
    this.nome = nome;
    this.pontosFidelidade = 0;
    this.historicoAlugueis = [];
  }
}

class Aluguel {
  constructor(qtdDias) {
    this.qtdDias = qtdDias;
    this.filmesAlugados = [];
    this.custoTotal = 0;
  }

  alugarFilme(filme) {
    this.filmesAlugados.push(filme);
    this.custoTotal += filme.custoTotalPorFilme(this.dias);
  }
}

class Categoria {
  constructor(nome, qtdDiasPadrao, valorDiasPadrao, valorDiasExtra) {
    this.nome = nome;
    this.qtdDiasPadrao = qtdDiasPadrao;
    this.valorDiasPadrao = valorDiasPadrao;
    this.valorDiasExtra = valorDiasExtra;
  }
}

*/ 