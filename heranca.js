function Animal(nome, barulho) {
    this.nome = nome || 'Sem nome';
	this.barulho = barulho || 'mudo';
}

Animal.prototype.fazerBarulho = function () {
    return 'Bhaaa';
};

function Cao(nome, barulho) {
    Animal.call(this, nome, barulho);
}

Cao.prototype = new Animal();
Cao.prototype.constructor = Cao;

Cao.prototype.fazerBarulho = function () {
    return 'Aoo';
};

function Gato(nome, barulho) {
    Animal.call(this, nome, barulho);
}

Gato.prototype = new Animal();
Gato.prototype.constructor = Gato;

Gato.prototype.fazerBarulho = function () {
    return 'miau!';
};

function Manada() {
    this.animais = [];
    this.addAnimal = function (animal) {
        this.animais.push(animal);
    };
}

function ManadaVirgula() {
    this.imprimeAnimais = function () {
        var animaisList = "";
        for (var i = 0; i < this.animais.length; i++) {
            if (i + 1 == this.animais.length) {
                animaisList += this.animais[i];
            } else {
                animaisList += this.animais[i] + ", ";
            }
        }
        console.log(animaisList);
    };
}

function ManadaSustenido() {
    this.imprimeAnimais = function () {
        var animaisList = "";
        for (var i = 0; i < this.animais.length; i++) {
            if (i + 1 == this.animais.length) {
				animaisList += this.animais[i];		
            } else {
                animaisList += this.animais[i] + "# ";
            }
        }
        console.log(animaisList);
    };
}

ManadaVirgula.prototype = new Manada();
ManadaSustenido.prototype = new Manada();

var animal = new Animal();
var gato = new Gato("Lulu","miiiau");
var cao2 = new Cao("Sasha","auuuuuuu");
var gato2 = new Gato("Horor","miihu");
var cao = new Cao("San","au au");
console.log(animal.fazerBarulho());
console.log(cao.fazerBarulho());
console.log(gato.fazerBarulho());
var manadaVirgula = new ManadaVirgula();
manadaVirgula.addAnimal(gato.barulho);
manadaVirgula.addAnimal(gato2.barulho);
manadaVirgula.addAnimal(cao.barulho); 
manadaVirgula.addAnimal(cao2.barulho);
manadaVirgula.imprimeAnimais();
var manadaSustenido = new ManadaSustenido();
manadaSustenido.addAnimal(gato.barulho);
manadaSustenido.addAnimal(gato2.barulho);
manadaSustenido.addAnimal(cao.barulho);
manadaSustenido.addAnimal(cao2.barulho);
manadaSustenido.imprimeAnimais()