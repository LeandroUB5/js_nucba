/////////////Ejercicio 1/////////////
//Escribí una función que reciba como parámetro un nombre y que imprima en consola “hola, soy {nombre} “.

// function presentacion(nombre) {
//   console.log(`Hola, soy ${nombre}`);
// }
// presentacion("Juan");

/////////////Ejercicio 2/////////////
//Escribí una función que imprima en consola la suma de dos números pasados por parámetro.

// function sumar(a, b) {
//   console.log(a + b);
// }
// sumar(5, 7);
// //flecha
// const suma = (a, b) => {
//   console.log(a + b);
// };
// suma(5, 7);

/////////////Ejercicio 3/////////////
//Escribí una función que reciba dos números por parámetro, multiplique a cada uno por dos y luego imprima por consola la suma de ambos números multiplicados.

// function sumarMultiplicado(a, b) {
//   console.log(a * 2 + b * 2);
// }
// sumarMultiplicado(2, 3);

/////////////Ejercicio 4/////////////
//Escribí una función que pueda recibir un número como parámetro y que imprima por consola la tabla de multiplicación del 1 al 10 de ese número.

// function tablaDel(a) {
//   for (let i = 0; i <= 10; i++) {
//     console.log(`El numero ${a} multiplicado por ${i} es igual a ${a * i}`);
//   }
// }
// tablaDel(3);

/////////////Ejercicio 5/////////////
//Escribí una función que reciba dos números por parámetro y que imprima por consola todo el intervalo entre ambos números, incluyéndolos. Por ejemplo , si ingresamos 1 y 3 deben imprimirse en consola los números “1” , “2” y “3”. Sin son iguales, que se imprima “Ambos números son iguales”.

// function intervalo(num1, num2) {
//   if (num1 > num2) {
//     console.log(num1);
//     while (num1 > num2) {
//       num1--;
//       console.log(num1);
//     }
//   } else if (num1 < num2) {
//     console.log(num1);
//     while (num1 < num2) {
//       num1++;
//       console.log(num1);
//     }
//   } else {
//     console.log("Ambos numeros son iguales");
//   }
// }

// intervalo(25, 20);

/////////////Ejercicio 6/////////////
// - Escribir las funciones “sumar” , “restar” , “multiplicar” “dividir” que puedan recibir dos parámetros e imprima en consola el resultado de la operación matemática correspondiente
// - Escribir una función que reciba dos números y una función como parámetros y que muestre en consola el resultado correspondiente a la operación matemática pasada como parámetro.

// function suma(a, b) {
//   console.log(a + b);
// }
// function resta(a, b) {
//   console.log(a - b);
// }
// function multiplicar(a, b) {
//   console.log(a * b);
// }
// function division(a, b) {
//   console.log(a / b);
// }
// function hacerOperacion(a, b, fn) {
//   fn(a, b);
// }
// hacerOperacion(10, 5, suma);
// hacerOperacion(10, 5, resta);
// hacerOperacion(10, 5, division);
// hacerOperacion(10, 5, multiplicar);
