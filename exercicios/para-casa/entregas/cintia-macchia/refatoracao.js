class HistoricoMedico{
    consulta
    vacinas
    procedimentos

    constructor(){
        this.consulta = []
        this.vacinas = []
        this.procedimentos = []
    }

    vacinar(vacina){
         return this.vacinas.push(vacina) 
    }

    consultar(data){
        this.consulta.unshift(data)
        console.log(`${data}`)
        
    }

    realizarProcedimento(tipo, motivo){
      return  this.procedimentos.push(tipo, motivo)
    }
}

class Animal {
    nome
    idade
    cor 
    constructor(nome, idade, cor){
        this.nome = nome,
        this.idade = idade,
        this.cor = cor
        this.historico =  new HistoricoMedico
    }

}

class Gato extends Animal{
    castrado

    constructor(nome, idade, cor, castrado){
        super(nome, idade, cor)
        this.castrado = castrado
    }

    miar(){
        console.log(`O gato ${this.nome} está miando`)
    }
}


class Cachorro extends Animal{
    castrado
    raca

    constructor(nome, idade, cor, castrado, raca){
        super(nome, idade, cor)
        this.castrado = castrado
        this.raca = raca
    }

    latir(){
        console.log(`O cachorro ${this.nome} está latindo`)
    }
}

class Especie {
    constructor(especie, idadeAdultaEmMeses){
        this.especie = especie
        this.idadeAdultaEmMeses = idadeAdultaEmMeses
    }
}

class AnimalExotico extends Animal {
   
    constructor(nome,idade, cor, especie){
        super(nome, idade, cor)
        this.especie = especie           
    }

        verificarSeEhAdulto() {
            if (this.especie instanceof Especie && this.idade >= this.especie.idadeAdultaEmMeses) {
                console.log("O animal é adulto");
            } else {
                console.log("O animal não é adulto");
            }
        }
    }


const hamster = new Especie("hamster", 3)

const gato1 = new Gato("Pipoca", 18, "branco", true);
gato1.historico.consultar("13/1/2023")
gato1.historico.vacinar("V8");
gato1.historico.realizarProcedimento("ultrassom", "dores")
gato1.miar();
console.log(gato1)
console.log(gato1.historico)

const cachorro1 = new Cachorro("Aslam", 17, "preto", false, "srd");
cachorro1.historico.consultar("13/1/2023");
cachorro1.historico.realizarProcedimento("ultrassom", "dores");
cachorro1.latir();
console.log(cachorro1.historico)

const zel = new AnimalExotico("zel", 4, "branco", hamster)
zel.historico.consultar("25/01/2023")
console.log(zel)
zel.verificarSeEhAdulto(hamster, 5)

const papagaio = new Especie("papagaio", 36)
const ze = new AnimalExotico("Ze", 24, "verde", papagaio)
console.log(ze)
ze.verificarSeEhAdulto(papagaio, 24)