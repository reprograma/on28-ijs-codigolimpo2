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
