//TODO Aplicar Princípio da Responsabilidade Única (SRP): Escolhendo um trecho do código da Locadora para refatorar. 
// Justificativa:
// O princípio SRP: Classes devem fazer apenas uma coisa, e fazer isso bem. Após a refatoração, cada classe escolhida desempenha um papel claro e específico, respeitando o princípio da responsabilidade única. Isso contribui para um código mais modular, coeso e testável, pois as mudanças em uma parte do sistema são menos propensas a afetar outras partes evitando problemas em efeito cascata. 

class Aluguel {
    constructor(qtdDias) {
        this.qtdDias = qtdDias;
        this.filmesAlugados = [];
    }

    alugarFilme(filme) {
        this.filmesAlugados.push(filme);
    }

    calcularCustoTotal(calculadora) {
        return calculadora.calcularCustoTotal(this.filmesAlugados, this.qtdDias);
    }
}

class CalculadoraCusto {
    static calcularCustoTotal(filmes, qtdDias) {
        let custoTotal = 0;
        filmes.forEach(filme => {
            custoTotal += filme.custoTotalPorFilme(qtdDias);
        });
        return custoTotal;
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

class Filme {
    constructor(categoria) {
        this.categoria = categoria;
    }

    custoTotalPorFilme(qtdDias) {
        const diasExcedentes = Math.max(qtdDias - this.categoria.qtdDiasPadrao, 0);
        return (
            this.categoria.valorDiasPadrao +
            this.categoria.valorDiasExtra * diasExcedentes
        );
    }
}

// Criando instâncias de Categoria
const Normal = new Categoria("Normal", 2, 2, 1);
const Premium = new Categoria("Premium", 3, 3, 1.5);

// Criando instâncias de Filme com diferentes categorias
const filme1 = new Filme(Normal);
const filme2 = new Filme(Premium);

// Criando instância de Aluguel
const aluguel = new Aluguel(5);

// Alugando filmes
aluguel.alugarFilme(filme1);
aluguel.alugarFilme(filme2);

// Calculando o custo total usando a CalculadoraCusto
const custoTotal = aluguel.calcularCustoTotal(CalculadoraCusto);

// Exibindo resultados
console.log("Filmes alugados:", aluguel.filmesAlugados);
console.log("Custo total do aluguel:", custoTotal);
