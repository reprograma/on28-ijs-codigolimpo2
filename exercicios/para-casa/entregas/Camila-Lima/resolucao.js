class Filme {
    constructor(titulo, categoria) {
      this.titulo = titulo;
      this.categoria = categoria;
    }
  
    custoTotalPorFilme(diasAlugado) {
      return this.categoria.calcularCusto(diasAlugado);
    }
  }
  
  class Categoria {
    constructor(nome, qtdDiasPadrao, valorDiasPadrao, valorDiasExtra) {
      this.nome = nome;
      this.qtdDiasPadrao = qtdDiasPadrao;
      this.valorDiasPadrao = valorDiasPadrao;
      this.valorDiasExtra = valorDiasExtra;
    }
  
    calcularCusto(diasAlugado) {
        let custoTotal = 0;
    
        // Custo para os dias padrão
        custoTotal += this.valorDiasPadrao * this.qtdDiasPadrao;
    
        // Custo para os dias extras, se houver
        if (diasAlugado > this.qtdDiasPadrao) {
          const diasExtras = diasAlugado - this.qtdDiasPadrao;
          custoTotal += this.valorDiasExtra * diasExtras;
        }
    
        return custoTotal;
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
      this.custoTotal += filme.custoTotalPorFilme(this.qtdDias);
    }
  }
  
  class Cliente {
    constructor(nome) {
      this.nome = nome;
      this.pontosFidelidade = 0;
      this.historicoAlugueis = [];
    }
  
    adicionarAluguel(aluguel) {
      this.historicoAlugueis.push(aluguel);
    }
  }
  
