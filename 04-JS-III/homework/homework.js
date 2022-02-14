// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return (array[0]);
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return (array[array.length - 1]);
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return (array.length);
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  let resultado = [];
  for (let i=0; i<array.length ; i++ ){
    resultado[i] = array[i] +1;
  }
  return (resultado);
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  let resultado = array;
  resultado.push(elemento);
  return resultado;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  let resultado = array;
  resultado.unshift(elemento);
  return resultado;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  let resultado = palabras.join(' ');
  return resultado;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  let resultado = false;
  for (let i=0;i<array.length;i++){
    if (elemento === array[i]){
      resultado = true;
      break;
    }
  }
  return resultado;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  let resultado = 0;
  for (let i=0;i<numeros.length;i++){
    resultado = numeros[i]+resultado;
  }
  return resultado;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  let promedio;
  let suma=0;
  for (let i=0;i<resultadosTest.length;i++){
    suma = resultadosTest[i]+suma;
  }
  promedio = suma/(resultadosTest.length)
  return promedio;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
let resultado = numeros.reduce(((acc,act)=> (acc > act) ? acc : act),0);
  return resultado;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  let resultado=1;
  if (arguments.length===0){
    resultado = 0;
  }else if (arguments.length===1){
    resultado = arguments[0];
  }else {
    for (let i=0;i<arguments.length;i++){
      resultado = arguments[i]*resultado; 
    }
  }
  return resultado;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  let j=0;
  for (let i=0;i<arreglo.length;i++){
    if (arreglo[i]>18){
       j++;
    }
  }
  
return j;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  let resultado;
  if ((numeroDeDia === 1)||(numeroDeDia === 7) ){
    resultado = 'Es fin de semana';
  }else resultado = 'Es dia Laboral'
  return resultado;
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  let str = n.toString();
  let resultado = str.slice(0,1);
  resultado = (resultado == 9) ? true : false;
  return resultado;
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  let resultado;
  for (let i=0;i<arreglo.length;i++){
    for (let j=0;j<arreglo.length;j++){
    if (arreglo[i]!==arreglo[j]){
      resultado = false;
      break;
     }else resultado = true; 
    }
  }
  return resultado;
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  let mesArray = [];
  let j=0;
  for (let i=0;i<array.length;i++){
    if ((array[i] === 'Enero') || (array[i] === 'Marzo') || (array[i] === 'Noviembre')){
      mesArray[j]=array[i];
      j++;
    }
  }
  if (j===3){
    return mesArray;
  }else return 'No se encontraron los meses pedidos'
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  let j=0;
  let arryMyorCien=[];
  for (let i=0;i<array.length;i++){
    if (array[i]>100){
      arryMyorCien[j] = array[i];
       j++;
    }
  }
  
return arryMyorCien;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  let arreglo = [];
  let suma=numero;
  for (let i=0;i<10;i++){
    if (i!==suma){
      suma = suma+2;
      arreglo[i]=suma;
    }else return 'Se interrumpió la ejecución'
  }
  return arreglo;
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  let arreglo = [];
  let suma=numero;
  let j=0;
  for (let i=0;i<10;i++){
    if (i!==5){
      suma = suma+2;
      arreglo[j]=suma;
      j++;
    }else continue;
  }
  return arreglo;
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
