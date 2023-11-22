class Filme {
  constructor(titulo, categoriaAluguel){
    this.titulo = titulo,
    this.categoriaAluguel = categoriaAluguel
  }

  set alterarCategoriaAluguel(novaCategoria){
    this.categoriaAluguel = novaCategoria
  }
}

class Cliente{
  constructor(nome){
    this.nome = nome,
    this.historicoFilmesDeAlugados = [],
    this.pontosFidelidade = 0
  }

}

class Locacao{
  constructor(filme, categoria){
    this.filmeAlugado = [],
    this.categoria = categoria,

    this.filmesAlugados.push(filme)
  }

  adicionaLocacao(){
    cliente.historicoFilmesDeAlugados.push(this.filmeAlugado)
  }

//   imprimeNotaDeLocacao(categoria, cliente){
//     return `Filmes alugados: ${this.filmeAlugado} na categoria ${categoria.nome} por ${categoria.dias}. O valor do aluguel é ${categoria.valorDias} e cada dia extra custa ${categoria.valorDiasExtras}.`
//   } colocar numa class e criar uma locadora 
}

// class NotaDeLocacao{
//   imprimirNota(cliente, locacao){
//     return `
//     Cliente: ${cliente.nome}
//     Filmes alugados: ${locacao.filmeAlugado} na categoria ${locacao.categoria.nome} por ${locacao.categoria.dias}. 
//     O valor inicial do aluguel é R$${locacao.categoria.valorDias} e cada dia extra custa R$${locacao.categoria.valorDiasExtras}.`
//   }
// }

class Categoria{
  constructor(nome, qtdDiasPadrao, valorDias, valorDiasExtras){
    this.nome = nome,
    this.qtdDiasPadrao = qtdDiasPadrao,
    this.valorDias = valorDias,
    this.valorDiasExtras = valorDiasExtras
  }
}

// filmes
const F001 = new Filme("Ran", "regular" );
const F002 = new Filme("Trois Couleurs: Bleu", "regular" );
const F003 = new Filme("Cars 2", "infantil" );
const F004 = new Filme("Latest Hit Release", "lançamento");

// clientes
const Maria = new Cliente('Maria')
const Teresa = new Cliente('Teresa')
const Joana = new Cliente('Joana')

// categoria 
const regular = new Categoria('regular', 3, 10, 3.5)
const lancamento = new Categoria('lançamento', 2, 15, 5)
const infantil = new Categoria('infantil', 5, 10, 4)

// locação
const locacao = new Locacao([F001, F002], regular);

// nota
const nota = new NotaDeLocacao()
const impressao = nota.imprimirNota(Maria, locacao)

