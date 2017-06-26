var assert = require('assert'); //CARGA MÓDULOS (LO HACE DISPONIBLE)

function ejercicio1(_arr, _num){
  var reduceArr = _arr.reduce(function(_total, _actual){
    return _total = _actual
  });
  if(isNaN(_num)){
    res = res* _num;
  }
  return res;
}

function ejercicio2(_telefonos, _filtro){
  return telefonos.filter(function(a){
    var primeras = a.toString().substr(0,3);
    var ultimas = a.toString().substr(-3);
    return (primeras == _filtro || ultimas== _filtro);
  });
}

//2 FUNCIONES DESCRIBE E IT ,(CALLBACK)
describe('Ejercicios Arrays',function(){
  describe('ejercicio1',function(){ //SE PUEDE UTILIZAR OTRO DESCRIBE E IT
  it('Prueba de [2,3] Y 10',function(){
    assert.equal (60,ejercicio1([2,3],10));
  });

    //assert.equal(-1,[1,2,3].indexOf(4));
  //  assert.equal(true,false); //EQUAL RECIVE DOS PARÁMETROS A COMPARAR
  it('Prueba de [2,3] Y "Hola"',function(){
    assert.equal (0,ejercicio1([2,3],"Hola"));

  });

  it('Prueba de [2,3] Y "Hola"',function(){
    assert.equal (0,ejercicio1([2,3],"Hola"));

  });
});

describe('Ejercicio2', function() {
  it("cuando es  [999999999, 988888888],207",function(){
      assert.equal ([900000000], ejercicio2([911111111,922222222],207));
      });
  });

});


//EJERCICIO
const numbers = prompt('Ingresa los números separados por comas').split(',');
const result = numbers.reduce((acc, n) => n * acc);
console.info(result*9);



//EJERCICIO
var num = [10, 11, 12];
var mul = 0; //multiplo de 2
num.forEach(
    function addNumber(value) { mul += value; }
);

document.write(mul);


//EJERCICIO
var arr =[2,5,7,2,3,8,20];
arr.map(function(i){
  for(var i=0;i<arreglo.length;i++)
    {
      var suma=arreglo[i]+arreglo;
    }
        return i+1
        });



//EJERCIO
        function celsius_a_fahrenheit( temperatura ) {
			var fahrenheit = (temperatura * 1.8) + 32;
			return fahrenheit;
		}

		var temperatura_celsius = [10, 16, 20, 24, 32];

		var temperatura_fahrenheit = temperatura_celsius.map(celsius_a_fahrenheit);

		console.table([temperatura_celsius,temperatura_fahrenheit]);
