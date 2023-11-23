const Cliente = require('../jeanne-mendes/Cliente')
const Filme = require('../jeanne-mendes/Filme')

// Nesse exercício estou utilizando o principio da Responsabilidade
// Classes devem fazer apenas uma coisa, e fazer isso bem.
class Locacao{
  
  carrinhoDeFilmes = [];
  totalDaLocação = 0; //A fazer: exibição do total da locação 
  pontosDeFidelidade = 0; //A fazer: exibição dos pontos de fidelidade
  
  LISTADECODIGOS = [
    {codigo : "regular", quantia: 2, valorPordiaExcedente: 1.5, diaExcedente: 2}, 
    {codigo: "lançamento", quantia: 3, valorPordiaExcedente: 3, diaExcedente: 1}, 
    {codigo: "infantil", quantia: 1.5, valorPordiaExcedente: 1.5, diaExcedente: 3}
  ]
  constructor(cliente){
    if(cliente instanceof Cliente){
      this.cliente = cliente
      }else{
        throw new Erro("Cliente não cadastrado.")
      }
    }

  exibirPontosDeFidelidade(){

  }

  exibirCarrinhoDeFilmes(){

  }

  exibirTotalDaLocacao(){
    
  }
  
  exibirFilmesLocados(){
    for(let i = 0; i < this.carrinhoDeFilmes.length; i++){
      console.log(`\t${this.carrinhoDeFilmes[i].titulo}`)
      // aqui eu queria implementar a exibição do preço 
      //de locação do filme
    }
  }

  adicionarFilmeAoCarrinho(filme, dias){
    let total = 0;
    if(filme instanceof Filme){
      this.carrinhoDeFilmes.push(filme);
      for(let i = 0; i < this.carrinhoDeFilmes.length; i++){
        total = this.calcularTotalPorFilme(this.carrinhoDeFilmes[i].codigoDoFilme, dias);
        this.pontosDeFidelidade++;

      }
      this.totalDaLocação += total;        
    }   
  }   


  calcularTotalPorFilme(codigoDoFilme, qtdDias){
    let custoTotalPorFilme = 0
    for(let i = 0; i < this.LISTADECODIGOS.length; i++){
      
      if(codigoDoFilme === this.LISTADECODIGOS[i].codigo){
        let valorPorDiaExcedente = this.calcularValorExcedente(codigoDoFilme);
        let diasExcedentes = this.calcularDiasExcedentesDeLocacao(codigoDoFilme, qtdDias);
        custoTotalPorFilme = this.LISTADECODIGOS[i].quantia + (valorPorDiaExcedente*diasExcedentes);   
        return custoTotalPorFilme;
      }
    }
    return custoTotalPorFilme;
  }

  calcularValorExcedente(codigo){
    for(let i = 0; i < this.LISTADECODIGOS.length; i++){
      if(codigo === this.LISTADECODIGOS[i].codigo){
        let valor = this.LISTADECODIGOS[i].valorPordiaExcedente;
        return valor;
      } 
    }
  }

  calcularDiasExcedentesDeLocacao(codigo, dias){
    for(let i = 0; i < this.LISTADECODIGOS.length; i++){
      if((dias >= this.LISTADECODIGOS[i].diaExcedente) && (codigo === this.LISTADECODIGOS[i].codigo)){
        return dias - this.LISTADECODIGOS[i].diaExcedente;
      } 
    }   
  }

}

module.exports = Locacao

const cliente1 = new Cliente("Ana")
const filme1 = new Filme("F001","Madrugada dos Mortos", "regular");
const filme2 = new Filme("F002", "Barbie", "lançamento");
//console.log(cliente1)
//console.log(filme1)
const locacao1 = new Locacao(cliente1)
locacao1.adicionarFilmeAoCarrinho(filme1, 3)
//console.log(locacao1)
locacao1.adicionarFilmeAoCarrinho(filme2, 4)
console.log(locacao1)

locacao1.exibirFilmesLocados()

