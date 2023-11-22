function HistoricoMedico(){
    this.consulta = [];
    this.vacinas = [];
    this.procedimentos = []
}
HistoricoMedico.prototype.vacinar = function vacinar(vacina){
    this.vacinas.push(vacina)
}
HistoricoMedico.prototype.consultar = function(dataDaConsulta){
    this.consulta.unshift(dataDaConsulta)
}
HistoricoMedico.prototype.procedencia = function procedencia(tipoDoProcedimento, motivoDoProcedimento){
    obj ={tipo:tipoDoProcedimento, motivo: motivoDoProcedimento}
    this.procedimentos.push(obj)
}


function Gato(nome, idade,cor, castrado ){
    this.nome = nome;
    this.idade = idade;
    this.cor = cor;
    this.castrado = castrado;
    this.historico = new HistoricoMedico();
}
Gato.prototype.miar = function miar(){
    console.log(`O gato de nome ${this.nome} está miando`)
}


function Cachorro(nome, idade,cor, castrado, raca){
    this.nome = nome;
    this.idade = idade;
    this.cor = cor;
    this.castrado= castrado;
    this.raca = raca;
    this.historico = new HistoricoMedico( );

}
Cachorro.prototype.latir = function latir(){
    console.log(`O cachorro de nome ${this.nome} está latindo`)
}
function AnimalExotico(nome, idade, especie, adulto){
    this.nome = nome;
    this.idade = idade;
    this.especie = especie;
    this.adulto = adulto;
    this.historico = new HistoricoMedico();
}

AnimalExotico.prototype.ehAdulto = function ehAdulto(){
    if((this.especie == 'Hamster')&(this.idade >=2 )){
        console.log(`O ${this.especie} de nome ${this.nome} é Adulto`)
        return this.adulto = true;
    }
    else if((this.especie == 'Papagaio')&(this.idade >=36 )){
        console.log(`O ${this.especie} de nome ${this.nome} é Adulto`)
        return this.adulto = true;
    }
   else if((this.especie == 'Calopsita')&(this.idade >=18 )){
        console.log(`O ${this.especie} de nome ${this.nome} é Adulto`)
        return this.adulto = true;
    }
}
// TESTANDO OS MÉTODOS PARA CACHORRO
const cachorro1 = new Cachorro("Leão", '14', 'Preto e branco', 'Não', 'srd');
cachorro1.historico.vacinar('v10');
cachorro1.historico.consultar('06/02/2019')
cachorro1.historico.consultar('10/04/2021')
cachorro1.historico.procedencia('anual', 'rotina')
cachorro1.historico.procedencia('mensal', 'rotina')
cachorro1.latir()
console.log(cachorro1.historico)
console.log(cachorro1)

// TESTANDO OS MÉTODOS PARA GATO
 const gato1 = new Gato('Tom', 1, 'siames', 'sim','ok')
gato1.historico.vacinar('v5');
gato1.historico.consultar('10/05/2022')
gato1.historico.consultar('10/04/2021')
gato1.historico.procedencia('consulta', 'dor de ouvido')
gato1.historico.procedencia('consulta', 'ultrassom')
gato1.miar()
console.log(gato1.historico)
console.log(gato1)

//TESTANDO OS MÉTODOS PARA ANIMAL EXÓTICO
const animal1 = new AnimalExotico("Louro José", '37', 'Papagaio', false);
animal1.historico.vacinar('New Castle');
animal1.historico.consultar('04/07/2020')
animal1.historico.consultar('10/03/2023')
animal1.historico.procedencia('consulta', 'rotina')
animal1.historico.procedencia('consulta', 'problema na asa')
animal1.ehAdulto(37)
console.log(animal1.historico)
console.log(animal1)