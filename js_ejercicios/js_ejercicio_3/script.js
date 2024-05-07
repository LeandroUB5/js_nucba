/////////////Ejercicio 1/////////////
//Crea un bucle que por cada iteración muestre en consola un mensaje que diga en que número de iteración estamos. Tiene que mostrar desde la iteración 1 a la 50 inclusive.

// for (let i = 1; i <= 50; i++) {
//   console.log(`Estamos en la iteracion numero ${i}`);
// }

/////////////Ejercicio 2/////////////
//Ahora vamos a hacer el camino inverso al camino anterior, modifícalo de manera tal que la iteración sea del 50 al 1.

// for (let i = 50; i >= 1; i--) {
//   console.log(`Estamos en la iteracion numero ${i}`);
// }

/////////////Ejercicio 3/////////////
//Creá una variable contador que, mientras que el valor de contador sea menor a 20 , se aumente en uno con cada iteración. Imprimí en consola el valor actual en cada una de las iteraciones.

// let contador = 0;
// while (contador < 20) {
//   console.log(contador);
//   contador++;
// }

// console.log(contador);

/////////////Ejercicio 4/////////////
//Escribí un código en el cual crees un array con los números del 1 al 10. (Este array lo vamos a seguir usando en los próximos ejercicios) y luego mediante el uso de un bucle, imprimí cada número en consola.
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < numeros.length; i++) {
//   console.log(numeros[i]);
// }

/////////////Ejercicio 5/////////////
//Escribí un código que imprima por consola a todos los números del array multiplicados por 2.
// for (let messi = 0; messi < numeros.length; messi++) {
//   console.log(numeros[messi] * 2);
// }

/////////////Ejercicio 6/////////////
//Escribí un bucle que imprima únicamente los primeros 5 números del array.

// for (let i = 0; i < numeros.length; i++) {
//   if (numeros[i] > 5) {
//     break;
//   }
//   console.log(numeros[i]);
// }

/////////////Ejercicio 7/////////////
//Escribí un bucle que imprima todos los números del array menos el número 7.

// for (let i = 0; i < numeros.length; i++) {
//   if (numeros[i] == 7) {
//     continue;
//   }
//   console.log(numeros[i]);
// }

/////////////Ejercicio 8/////////////
//Escribí un código que imprima por consola a todos los números pares del array de números.
// for (let i = 0; i < numeros.length; i++) {
//   if (numeros[i] % 2 === 0) {
//     console.log(numeros[i]);
//   }
// }

/////////////Ejercicio 9/////////////
//Ahora hagamos lo contrario. Escribí un código que imprima por consola todos los números impares del array de números.

// for (let i = 0; i < numeros.length; i++) {
//   if (numeros[i] % 2 !== 0) {
//     console.log(numeros[i]);
//   }
// }

/////////////Ejercicio 10/////////////
//Vamos a complicarla un poquito mas, escribí un código que por cada número del array imprima en consola la tabla (del 0 al 10) del número que corresponda en cada iteración.

// for (let i = 1; i <= numeros.length; i++) {
//   for (let e = 0; e <= numeros.length; e++) {
//     console.log(`${i} multiplicado por ${e} es igual a ${i * e}`);
//   }
// }
