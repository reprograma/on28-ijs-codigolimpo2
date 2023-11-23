class Jogador {
  constructor(nome) {
    this.nome = nome;
    this.setsGanhos = 0;
    this.pontuacaoSet = 0;
  }

  ganhouPonto() {
    this.pontuacaoSet++;
  }

  ganhouSet() {
    this.setsGanhos++;
    this.pontuacaoSet = 0;
  }

  perdeuSet() {
    this.pontuacaoSet = 0;
  }
}

class Impressora {
  static nomeDaPontuacao(jogador) {
    switch (jogador.pontuacaoSet) {
      case 0:
        return "Love";
      case 1:
        return "Fifteen";
      case 2:
        return "Thirty";
      case 3:
        return "Forty";
    }
  }

  static imprimirPontuacaoNormal(partida) {
    partida.jogadores.sort((p1, p2) =>
      p1.pontuacaoSet < p2.pontuacaoSet
        ? 1
        : p1.pontuacaoSet > p2.pontuacaoSet
        ? -1
        : 0
    );
    return `A partida está ${this.nomeDaPontuacao(
      partida.jogadores[0]
    )}-${this.nomeDaPontuacao(partida.jogadores[1])}!`;
  }

  static imprimirSets(partida) {
    partida.jogadores.sort((p1, p2) =>
      p1.setsGanhos < p2.setsGanhos ? 1 : p1.setsGanhos > p2.setsGanhos ? -1 : 0
    );
    return `A partida está ${partida.jogadores[0].setsGanhos} x ${partida.jogadores[1].setsGanhos} para o jogador ${partida.jogadores[0].nome}.`;
  }

  static imprimirPontuacaoEmpate(partida) {
    return `Sets: ${this.nomeDaPontuacao(
      partida.jogadores[0]
    )}-All! ${this.imprimirSets(partida)} `;
  }

  static imprimirVantagem(partida) {
    partida.jogadores.sort((p1, p2) =>
      p1.pontuacaoSet < p2.pontuacaoSet
        ? 1
        : p1.pontuacaoSet > p2.pontuacaoSet
        ? -1
        : 0
    );
    return `O jogador ${
      partida.jogadores[0].nome
    } tem a vantagem! ${this.imprimirPontuacaoNormal(partida)} ${this.imprimirSets(partida)}`;
  }

  static imprimirVitoria(partida) {
    partida.jogadores.sort((p1, p2) =>
      p1.pontuacaoSet < p2.pontuacaoSet
        ? 1
        : p1.pontuacaoSet > p2.pontuacaoSet
        ? -1
        : 0
    );
    return `O jogador ${partida.jogadores[0].nome} ganhou o set!`;
  }
}

class Partida {
  constructor(jogador1, jogador2) {
    if (!(jogador1 instanceof Jogador) || !(jogador2 instanceof Jogador)) {
      throw new Error("Esses jogadores não existem!");
    }
    this.jogadores = [jogador1, jogador2];
  }

  pegarPlacar() {
    const acertandoVantagem = this.jogadores.sort((p1, p2) =>
      p1.pontuacaoSet < p2.pontuacaoSet
        ? 1
        : p1.pontuacaoSet > p2.pontuacaoSet
        ? -1
        : 0
    );
    console.log(acertandoVantagem);
    const jogador1 = acertandoVantagem[0];
    const jogador2 = acertandoVantagem[1];
    if (jogador1.pontuacaoSet === jogador2.pontuacaoSet) {
      return Impressora.imprimirPontuacaoEmpate(this);
    } else if (jogador1.pontuacaoSet - jogador2.pontuacaoSet === 1) {
      return Impressora.imprimirVantagem(this);
    }
  }
}
