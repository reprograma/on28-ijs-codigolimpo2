class HistoricoMedico{
    constructor(){
        this.consulta = [];
        this.vacinas = [];
        this.procedimentos = [] 
    }
    vacina(nomeDaVacina){
        this.vacinas.push(nomeDaVacina)
    }
    consultar(dataDaConsulta){
        this.consulta.unshift(dataDaConsulta)
    }
    procedimentos(tipoDoProcedimento, motivoDoProcedimento){
        obj ={tipo:tipoDoProcedimento, motivo: motivoDoProcedimento}
        this.procedimentos.push(obj)
    }
}

class Animal{
    constructor(nome, idade, cor, castrado){
        this.nome = nome;
        this.idade = idade;
        this.cor = cor;
        this.castrado= castrado;
        this.historico = new HistoricoMedico();
    }
    alimentar(){
        console.log(`O animal de nome ${this.name} está se alimentando!`)
    }
}

class Gato extends Animal{
    constructor(nome, idade, cor, castrado){
        super(nome, idade, cor, castrado)
        this.historico = new HistoricoMedico();
    }
    miar(){
        console.log(`O gato de nome ${this.nome} está miando`)
    }
    alimentarGato(){
        super.alimentar()
    }
}

class Cachorro extends Animal{
    constructor(nome, idade, cor, castrado){
    super(nome, idade, cor, castrado)
    this.historico = new HistoricoMedico();
    }
     latir(){
        console.log(`O cachorro de nome ${this.nome} está latindo`)
    }
    alimentarCachorro(){
        super.alimentar()
    }
}

class Hamster extends Animal{
    constructor(nome, idade, cor, adulto){
        super(nome, idade, cor, castrado)
        this.adulto = adulto
        this.historico = new HistoricoMedico();
    }
    hamsterEhAdulto(){
        if(this.idade>2){return `O ${this.name} é adulto pois possui ${this.idade}`}
    }
    alimentarHamster(){
        super.alimentar()
    }
}
class Calopsita extends Animal{
    constructor(nome, idade, cor, adulto){
        super(nome, idade, cor, castrado)
        this.adulto = adulto
        this.historico = new HistoricoMedico();
    }
   calopsitaEhAdulto(){
        if(this.idade>18){return `O ${this.name} é adulto pois possui ${this.idade}`}
    }   
    alimentarCalopsita(){
        super.alimentar()
    }
}

class Papagaio extends Animal{
    constructor(nome, idade, cor, adulto){
        super(nome, idade, cor, castrado)
        this.adulto = adulto
        this.historico = new HistoricoMedico();
    }
   papagaioEhAdulto(){
        if(this.idade>18){return `O ${this.name} é adulto pois possui ${this.idade}`}}
        
    alimentarPapagaio(){
        super.alimentar()
        }
}

