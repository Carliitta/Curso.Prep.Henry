// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  let primero = [6,8,4]
 
  console.log(primero[0])
 
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  let ultimo = [6,8,4]
 
 console.log( ultimo[ultimo.length -1])
  
 
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código: 
array=[5,98,7,9,2,4] 

console.log("Longitud del array: " + array.length)
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  let array = [15, 20, 30, 40, 50];
  let length = array.length;
  for (var i = 0; i < length; i++) {
    array[i] += 1;
  }
console.log(array)
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  var array = ['rojo', 'verde','azul'];
   array.push('negro');
   console.log(array); 
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  var array = ['rojo', 'verde','azul'];
  array.unshift('negro');
  console.log(array); 
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  palabras=['hola,','como','te','llamas?']
  console.log(palabras[0]+' '+ palabras[1]+' '+ palabras[2]+' '+ palabras[3])
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  var array=['hola','adios','ttt'];
  var elemento='adios';

  for(i = 0; i < array.length; i++ ){ 
    
  if (array[i]=== elemento){
    console.log( true);
  }
  else{
    console.log(false);
  }
}
}
  

function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  numeros=[5,5,9]
  var suma=0;
  for ( i = 0; i < numeros.length; i++) {
  suma += numeros[i];
}
  console.log(suma);
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  resultadosTest=[9,13,11,20]
  var promedio=0;
  var suma=0;
  for(i=0;i< resultadosTest.length;i++){
    suma += resultadosTest[i];
  }
  promedio= suma/resultadosTest.length
  console.log(promedio);
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  numeros=[5,8,7,3]
  var maximo=0;
  for(i=0;i< numeros.length;i++){
    if(maximo < numeros[i]){
      maximo = numeros [i];
    }
  }
  console.log(maximo)
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:

  var total = 1;
  if (arguments.length < 1) 
  console.log(0) ;
 
  for(i = 0; i < arguments.length; i++){
    total = total * arguments[i];
  }
  console.log( total);
}

function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
 arreglo=[3,20,6,80]
 
 
console.log(arreglo.filter(i => i > 18));

}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   

  numeroDeDia=[6]
if(numeroDeDia==1 || numeroDeDia==7)  
{
  console.log('es fin de semana')
}
else{
  console.log('es dia laboral')
}
} 

function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  n = 9875;
  let num = n.toString();
  if(num.charAt(0) === "9"){
    console.log(true)
  }
  else{
    console.log(false)
  }

}

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  arreglo=[8,8,8]
  
 
   if( arreglo.every(i=>arreglo[0]== i)){
       console.log(true)
    }
    else
    {
      console.log(false)
    }
  
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
 
  var array = ['Diciembre','Enero','Marzo','Febrero','Mayo','Abril','Noviembre']
  var nuevoArray = [];
  for(i = 0; i < array.length; i++){
    if(array[i] === "Enero" || array[i] === "Marzo" || array [i] === "Noviembre"){
      nuevoArray.push(array[i]);
    }
  }
  if (nuevoArray.length < 3){
    console.log("No se encontraron los meses pedios") ;
  }
  else{
    console.log(nuevoArray);
  }
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  array=[8,22,48,178,111]
 
  console.log(array.filter(i => i > 100));

}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  numero=5;
  var suma = numero;
  var array = [];
  for (i = 0; i < 10; i++){
    suma = suma + 2;
    if(suma === i) break;
    else{
      array.push(suma);
    }
  }
  if(i < 10){
    console.log( "Se interrumpio la ejecucion");
  }
  else{
    console.log(array);
  }
}

   
 



function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  numero=8;
  var suma = numero;
  var array = [];
  for(var i= 0; i<10; i++) {
    if(i === 5) continue;
    else {
      suma = suma + 2;
      array.push(suma);
    }
  }
  console.log(array ) ;

}





// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
