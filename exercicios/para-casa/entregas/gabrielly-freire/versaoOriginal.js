// HISTORICO
function HistoricoMedico(){
  this.consultas = [];
  this.vacinas = [];
  this.procedimentos = [];
}

HistoricoMedico.prototype.aplicarVacinar = function aplicarVacinar(vacina){
  this.vacinas.push(vacina);
  console.log(`A vacina ${vacina} foi adicionada ao histórico médico`);
}

HistoricoMedico.prototype.realizarConsultar = function realizarConsultar(data){
  this.consultas.unshift(data);
  console.log(`A consulta da data ${data} foi adicionada ao histórico médico`);

}

HistoricoMedico.prototype.realizarProcedimento = function realizarProcedimento(tipo, motivo){
  this.procedimentos.push({tipo, motivo});
  console.log(`O procedimento ${tipo} foi adicionada ao histórico médico`);

} 

// GATOS
function Gato(nome, idade, cor, castrado){
  this.nome = nome;
  this.idade = idade;
  this.cor = cor;
  this.castrado = castrado;
  this.historico = new HistoricoMedico();
}

Gato.prototype.miar = function miar(){
  console.log("miau miauu");
}

const gato = new Gato('jorginho', 24, 'rajado', false);
console.log(gato);
gato.miar();
gato.historico.aplicarVacinar('raiva');
gato.historico.realizarConsultar('25/09/2023');
gato.historico.realizarProcedimento('ultrassom', 'dores');
console.log(gato.historico);

//CACHORRO
function Cachorro(nome, idade, cor, castrado, raca){
  this.nome = nome;
  this.idade = idade;
  this.cor = cor;
  this.castrado = castrado;
  this.raca = raca;
  this.historico = new HistoricoMedico();
}


Cachorro.prototype.latir = function latir(){
  console.log("au au au");
}

const cachorro = new Cachorro('pingo', 120, 'caramelo', false, 'vira-lata');
console.log(cachorro);
cachorro.latir();
cachorro.historico.aplicarVacinar('raiva');
cachorro.historico.realizarConsultar('10/09/2023');
cachorro.historico.realizarConsultar('22/09/2023');
cachorro.historico.realizarProcedimento('ultrassom', 'dores');
console.log(cachorro.historico);

// ANIMAIS EXÓTICOS
function AnimalExotico(nome, idade, cor, especie){
  this.nome = nome;
  this.idade = idade;
  this.cor = cor;
  this.especie = especie;
  this.historico = new HistoricoMedico();
}

AnimalExotico.prototype.ehAdulto = function ehAdulto(){
  this.adulto = false;
  if(this.especie === 'hamster' && this.idade >= 2){
      this.adulto = true;
  }
  if(this.especie === 'papagaio' && this.idade >= 36){
      this.adulto = true;
  }
  if(this.especie === 'calopsita' && this.idade >= 18){
      this.adulto = true;
  }

  if(this.adulto==true){
      console.log(`O ${this.especie} é adulto`);
  }else{
      console.log(`O ${this.especie} não é adulto, pois possui apenas ${this.idade} mes(es)`);
  }
}

const hamster = new AnimalExotico('kevin', 1, 'marrom', 'hamster');
console.log(hamster);
hamster.ehAdulto();
hamster.historico.aplicarVacinar('v8');
hamster.historico.realizarConsultar('15/09/2023');
hamster.historico.realizarProcedimento('ultrassom', 'dores');
console.log(hamster.historico);

