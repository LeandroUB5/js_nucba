/////////////Ejercicio 1/////////////
//Crea una variable con tu nombre y otra con tu edad. Imprimí ambas variables en consola

let nombre = "Leandro";
let edad = 22;
console.log(nombre, edad);

/////////////Ejercicio 2/////////////
//Escribí un código que imprima en consola “Hola! Mi nombre es (tu nombre) y tengo (tu edad) años.

console.log("Hola! Mi nombre es " + nombre + " y tengo " + edad + " años.");
console.log(`Hola! Mi nombre es ${nombre} y tengo ${edad} años.`);

/////////////Ejercicio 3/////////////
//Reasigna los valores de las variables nombre y edad y volvé a imprimir el mensaje del ejercicio anterior en consola.

nombre = "Agustin";
edad = 21;

console.log(`Hola! Mi nombre es ${nombre} y tengo ${edad} años.`);

/////////////Ejercicio 4/////////////
//Crea dos variables con valores de tipo número e imprimí la suma de ambos por consola.

let num1 = 25;
let num2 = 50;

console.log(num1 + num2);

/////////////Ejercicio 5/////////////
//El siguiente código nos esta dando un error en consola. Corregilo de manera tal que se imprima en la consola el número 25.

// const numero = 15;
// numero = 15;
// console.log(numero);

let numero = 15;
numero = 25;
console.log(numero);

/////////////Ejercicio 6/////////////
//Escribí un código que pase el valor de una variable como una alerta en el navegador.

let navAlert = "Alerta para el navegador";
//alert(navAlert);

/////////////Ejercicio 7/////////////
//Escribí un código que pida por pantalla un valor, lo almacene en una variable y muestre la variable por consola.

//let fruta = prompt("Escriba una fruta");
//console.log(`La fruta que elejiste fue ${fruta}`);

/////////////Ejercicio 8/////////////
//Escribí un código que pida haga lo mismo que el ejercicio anterior pero esta vez que muestre el valor como una alerta que diga : “El valor ingresado es (el valor)”.

//alert(`La fruta ingresada es ${fruta}`);

/////////////Ejercicio 9/////////////
//Escribí un código que pida dos nombres por pantalla, los almacene en una variable y que muestre una alerta que diga: “El primer valor ingresado es (valor1) y el segundo es (valor2)”.

//let name1 = prompt("Ingrese un nombre");
//let name2 = prompt("Ingrese otro nombre");

//alert(`El primer nombre ingresado es ${name1} y el segundo es ${name2}.`);

/////////////Ejercicio 10/////////////
//El siguiente código nos devuelve “undefined” por consola. Modificalo de manera que nos devuelva el valor de la variable nombre.

//console.log(name);
//let name = "Carlos";

let name = "Carlos";
console.log(name);

/////////////Ejercicio 11/////////////
//Teniendo en cuenta lo visto en clase sobre scopes, ¿ qué es lo que nos va a imprimir la consola en el siguiente ejercicio?

let valor = "hola";
function mostrarVariable() {
  let valor = "chau";
}
console.log(valor);
//La variable cuyo valor es "chau" se encuentra dentro de una función, por lo tanto, es de scope local, y por ende no es accesible desde el console.log colocado en el scope global.

/////////////Ejercicio 12/////////////
//¿Qué es lo que va a imprimirse en consola en el siguiente ejercicio?

let a = false;
let b = true;
let c = true;

console.log(!a && b && c);
//El operador lógico "&&" tendrá como resultado "true" si las expresiones que componen la sentencia se evalúan todas como "true". Tanto "b" como "c" son de valor "true" , por ende, si en la sentencia tuviéramos "a" que es false, hubiera sido la opción "B". Sin embargo, al haber utilizado el operador de negación en "a" , el valor cambia, ya que "false" al negarlo pasa a ser "true".

/////////////Ejercicio 13/////////////
//¿Qué es lo que va a imprimirse en consola en el siguiente ejercicio?

let ab = 18;
let bc = 20;

console.log(ab < bc || ab === bc || ab >= bc);
//El operador lógico "||" evalúa como "true" siempre y cuando no suceda que todos las expresiones que se están evaluando no sean de valor "false". Entonces, basta con que una sola de las expresiones evaluadas tenga valor "true" para que la expresión completa sea verdadera, y como ya la primera expresión (ab < bc , es decir 18 es menor a 20) es verdadera, el resultado que se mostrara por pantalla es "true"

/////////////Ejercicio 14/////////////
//¿Qué es lo que va a imprimirse en consola en el siguiente ejercicio?

let abc = false;
let bcd = true;

if (abc && !bcd) {
  console.log("opcion a");
} else if (abc || bcd) {
  console.log("opcion b");
} else {
  console.log("opcion c");
}
//El operador lógico "&&" tendrá como resultado "true" si las expresiones que componen la sentencia se evalúan todas como "true". En este caso "abc" es "false" , por ende, ya es suficiente eso para que al evaluar la condición , esta sea falsa.
//El operador lógico "||" tendrá como resultado "true" en todos los casos a menos que todas las expresiones que componen la sentencia sean de valor "false". Por ende al ser "abc" de valor "false" pero "bcd" de valor "true" , esa condición se evalúa como verdadera, y es la opción que se mostrará en consola.

/////////////Ejercicio 15/////////////
//Escribí un código que tome una variable edad con un valor numérico e imprima por consola “soy mayor de edad” si el número es mayor o igual a 18 , y “soy menor de edad” en caso contrario.

//let edad1 = parseInt(prompt("Escriba su edad"));

// if (edad1 < 18) {
//   console.log("Soy menor de edad");
// } else {
//   console.log("Soy mayor de edad");
// }

/////////////Ejercicio 16/////////////
//Escribí un código que tome dos valores numéricos e imprima por consola la opción que corresponda :
// - valor1 es mayor a el valor2
// - valor2 es mayor a el valor1
// - valor1 y valor2 son iguales.
// Podes crear dos variables numéricas e ir cambiándolas para ver los distintos resultados

let valor1 = 25;
let valor2 = 20;
if (valor1 > valor2) {
  console.log(`El ${valor1} es mayor que ${valor2}`);
} else if (valor2 > valor1) {
  console.log(`El ${valor2} es mayor que ${valor1}`);
} else {
  console.log(`${valor1} y ${valor2} son iguales`);
}

/////////////Ejercicio 17/////////////
//Escribí un código que pida un string mediante un prompt, lo almacene en una variable y cumpla con las siguientes condiciones:
// - Si el string es “alerta”, que imprima una alerta en pantalla que diga “Soy una alerta”
// - Si el string es “consola”, que imprima en consola “Soy un mensaje en la consola”
// - En caso de que no sea ninguno de los casos anteriores, que se imprima una alerta y también en consola “Me muestro en ambos lados”

// let valor3 = prompt("Escriba alerta, consola o cualquier otra cosa");

// if (valor3 === "alerta") {
//   alert("Soy una alerta");
// } else if (valor3 === "consola") {
//   console.log("Soy un mensaje en consola");
// } else {
//   alert("Me muestro en ambos lados");
//   console.log("Me muestro en ambos lados");
// }

/////////////Ejercicio 18/////////////
//Escribí un código mediante el uso de condicionales que defina una variable “edad” y que cumpla las siguientes condiciones :
// - Si la edad es menor a 13 , imprima por consola “Soy un niño”
// - Si la edad es menor a 20 y mayor o igual a 13, imprima por consola “Soy un adolescente”
// - Si la edad es mayor o igual a 20 y menor a 50 , imprima por consola “Soy un adulto”
// - Si la edad es mayor a 50 , imprima por consola “Soy un adulto mayor”.

// let edad1 = prompt("Ingrese su edad");
// if (edad1 < 13) {
//   console.log("soy un niño");
// } else if (edad1 < 20) {
//   console.log("Soy un adolecente");
// } else if (edad1 >= 20 && edad1 < 50) {
//   console.log("Soy un adulto");
// } else {
//   console.log("Soy un adulto mayor");
// }

/////////////Ejercicio 19/////////////
// Escribí una sentencia switch que cumpla con las siguientes condiciones:
// - Deberán definir una variable con una palabra ( por fuera del switch ) sobre la cual analizarán los casos.
// - Debe tener 4 casos posibles (cada uno será una fruta distinta) que imprimirán en consola “Soy un/a “nombre de la fruta de este caso”” y un caso default que imprimirá en consola “No se que soy”

// let fruta1 = prompt("Elija una fruta").toLowerCase();

// switch (fruta1) {
//   case "banana":
//     console.log(`Soy un/a ${fruta1}`);
//     break;
//   case "manzana":
//     console.log(`Soy un/a ${fruta1}`);
//     break;
//   case "pera":
//     console.log(`Soy un/a ${fruta1}`);
//     break;
//   case "pomelo":
//     console.log(`Soy un/a ${fruta1}`);
//     break;
//   default:
//     console.log("No se que soy");
// }
