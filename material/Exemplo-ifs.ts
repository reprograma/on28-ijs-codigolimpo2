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
    let filme: Filme = filmes[r.filmeID];
    let quantiaFilme = 0;

    // determina quantia para cada filme
    // switch (filme.codigo) {
    //   // calculando o custo de alugar um filme regular com base na quantidade de dias
    //   case "regular":
    //     quantiaFilme = 2;
    //     // se o filme for alugado por mais dias que o tempo padrão
    //     if (r.dias > 2) {
    //       quantiaFilme += (r.dias - 2) * 1.5;
    //     }
    //     break;
    //   case "lançamento":
    //     // calculando o custo de alugar um filme lançamento com base na quantidade de dias
    //     quantiaFilme = r.dias * 3;
    //     break;
    //   case "infantil":
    //     // calculando o custo de alugar um filme infantil com base na quantidade de dias
    //     quantiaFilme = 1.5; // 50 centavos/dia
    //     // se o filme for alugado por mais dias que o tempo padrão
    //     if (r.dias > 3) {
    //       quantiaFilme += (r.dias - 3) * 1.5;
    //     }
    //     break;
    // }
    quantiaFilme = filme.calcularTotal(r.dias);

    // adiciona pontos de fidelidade
    pontosFidelidade++;
    // adiciona pontos bônus caso fique com um lançamento por até dois dias
    if (filme.codigo.titulo === "lançamento" && r.dias > 2) pontosFidelidade++;

    // escreve os resultados para esse filme
    resultado += `\t${filme.titulo}\t${quantiaFilme}\n`;
    quantiaTotal += quantiaFilme;
  }
  // escreve os rodapés
  resultado += `A quantia devida é ${quantiaTotal}\n`;
  resultado += `Você ganhou ${pontosFidelidade} pontos de fidelidade\n`;

  return resultado;
};

class Categoria {
  titulo: "regular" | "infantil" | "lançamento";
  qtdDiasPadrao: number;
  custoDiasPadrao: number;
  custoDiasExtras: number;

  constructor(titulo, qtdDiasPadrao, custoDiasPadrao, custoDiasExtras) {
    this.titulo = titulo;
    this.qtdDiasPadrao = qtdDiasPadrao;
    this.custoDiasPadrao = custoDiasPadrao;
    this.custoDiasExtras = custoDiasExtras;
  }
}

interface Alugavel {
  titulo: string;

  calcularTotal: (number) => number;
}

class Filme implements Alugavel {
  titulo: string;
  codigo: Categoria;

  constructor(titulo, codigo) {
    this.titulo = titulo;
    this.codigo = codigo;
  }

  calcularTotal(qtdDias: number): number {
    return (
      this.calcularTotalTempoExtra(qtdDias) +
      this.calcularTotalTempoPadrao(qtdDias)
    );
  }

  calcularTotalTempoPadrao(qtdDias: number): number {
    const { qtdDiasPadrao, custoDiasPadrao } = this.codigo;
    const totalDiasPadrao = Math.min(qtdDias, qtdDiasPadrao);
    return totalDiasPadrao * custoDiasPadrao;
  }

  calcularTotalTempoExtra(qtdDias: number): number {
    const { qtdDiasPadrao, custoDiasExtras } = this.codigo;
    const totalDiasExtras = Math.max(0, qtdDias - qtdDiasPadrao);
    return totalDiasExtras * custoDiasExtras;
  }
}

const regular = new Categoria("regular", 2, 1, 1.5);
const barbie = new Filme("Barbie", regular);
