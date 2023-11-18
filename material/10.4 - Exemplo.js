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

class Titulo {
  constructor(titulo, categoria) {
    this.titulo = titulo;
    this.categoria = categoria;
  }

  custoIndividual(diasAlugado) {
    return; // número
  }
}

class Jogo extends Titulo {
  constructor(titulo, categoria, console) {
    super(titulo, categoria);
    this.console = console;
  }

  custoIndividual(diasAlugado) {
    // ERRADO
    // como não retorna um número, não pode ser usado
    // nos mesmos lugares que titulo.custoIndividual()

    console.log(`Seu custo total é: ${total}`);
    // new Titulo().custoIndividual(4) // 20
    // new Filme().custoIndividual(4) // 35
    // new Jogo().custoIndividual(4) // void

    // CERTO
    // também retorna um número que podemos somar no total
    return total; //número
  }
}

class Filme extends Titulo {
  constructor(titulo, categoria) {
    this.titulo = titulo;
    this.categoria = categoria;
  }

  mudarCategoria(novaCategoria) {
    this.categoria = novaCategoria;
  }

  custoIndividual(diasAlugado) {
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
    this.titulosAlugados = [];
    this.custoTotal = 0;
  }

  alugar(titulo) {
    this.titulosAlugados.push(titulo);
    this.custoTotal += titulo.custoIndividual();
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
