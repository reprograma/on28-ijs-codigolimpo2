function Cat(name, age, color, castrated){
    this.name = name,
    this.age = age,
    this.color = color,
    this.castrated = castrated,
    this.history = new MedicalHistory
}
Cat.prototype.miar = function miar(){
    console.log(`O gato ${this.name} está miando!`)
}

function Dog(name, age, color, castrated, race)
{
    this.name = name,
    this.age = age,
    this.color = color,
    this.castrated = castrated,
    this.race = race,
    this.history = new MedicalHistory
}
Dog.prototype.latir = function latir(){
    console.log(`O cachorro ${this.name} está latindo!`)
}

function ExoticAnimal(name, age, color, especies, adult){
    this.name = name,
    this.age = age,
    this.color = color,
    this.especies = especies,
    this.adult = adult,
    this.history = new MedicalHistory
}

ExoticAnimal.prototype.ehAdulto = function  ehAdulto() {
   this.adult = true;
   
    if (this.especie === "hamster" && this.age < 2) {
     return this.adult = false
    } 
     if (this.especie === "papagaio" && this.age < 36) {
        return this.adult = false}

    if (this.especie === "calopsita" && this.age < 18) {
        return this.adult = false}

    if(this.adult === true){
        console.log(`esta ${this.especies} é adulto`)
    } else {
        console.log(`esta ${this.especies} não é adulto`)
    }

   
  };

function MedicalHistory() {
    this.consultas = []
    this.vacinas = []
    this.procedimetos = []   
}

MedicalHistory.prototype.vacinar = function vacinar (vacina){
    this.vacinas.push(vacina);
    console.log(` A vacina ${vacina} foi dada.`)  
}

MedicalHistory.prototype.consultar =  function consultar (data){
        this.consultas.unshift(data); //add elementos no inicio do array
        console.log(`A consulta ${data}`)
    }
   
MedicalHistory.prototype.realizarProcdimento = function realizarProcdimento (tipo, motivo){
    this.procedimetos.push({ tipo, motivo })
    console.log(`O procedimemto ${tipo} foi aplicado pelo motivo ${motivo}`)

} 


const gato1 = new Cat("Pipoca", 18, "branco", true);
gato1.history.consultar("9/7/2023");
gato1.history.vacinar("V8");
gato1.history.realizarProcdimento("ultrassom", "dores")
gato1.miar();

console.log(gato1.history)
console.log(this.vacinas)


const cachorro1 = new Dog("Aslam", 42, "preto", false, "srd");
cachorro1.history.consultar("13/1/2023");
cachorro1.history.realizarProcdimento("ultrassom", "dores");
cachorro1.latir();
console.log(cachorro1.history)

const hamster1 = new ExoticAnimal("Zel", 19, "branco e laranja", "hamster");
console.log(hamster1)
console.log(` ${hamster1.ehAdulto()}`)