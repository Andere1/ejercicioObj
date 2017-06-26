//EJERCICIO 1 VIERNES
var r1 = new rectangulo(5,4);

function rectangulo(base,altura){
  this.base = base;
  this.altura = altura;
  this.calcularArea = function (r1) { return this.base*this.altura; };


}
console.log(r1.calcularArea());

//EJERCICIO 02 VIERNES
var f1 = new Date();
var f2 = new Date();
f2.setFullYear(1991,23,8);
var anios = parseInt(f1.getYear() - f2.getYear());
document.write(anios + " años");

//EJERCICIO 3 VIERNES
var retornar = {
    nombre: "Liana",
    edad: 21,
    pasatiempo: 'patinar',
    getInfo: function () {    return 'Hola soy '+this.nombre+ ' tengo ' + this.edad + 'años y me gusta ' + this.pasatiempo +'.';     }
}
console.log(retornar.getInfo());
