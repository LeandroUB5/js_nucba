/* let nombre = prompt("Ingrese su nombre");
alert("Bienvenido/a " + nombre);*/
// var edad = 15;
// var nombre = "Juan";
// var profesion = "Progamador";
// var edadDelPadre = 56;

// console.log("/////////////////////////////");
// console.log("Bienvenido " + nombre);
// console.log("Su edad es de " + edad);
// console.log("Profesion: " + profesion);
// console.log("No me interesa que la edad de su padre sea " + edadDelPadre);
// console.log("/////////////////////////////");

//Mini calculadora no cientifica
var numero1 = parseInt(prompt("Ingrese numero"));
var numero2 = parseInt(prompt("Ingrese otro numero"));

var suma = numero1 + numero2;
var resta = numero1 - numero2;
var multiplicacion = numero1 * numero2;
var division = numero1 / numero2;

console.log("La suma de " + numero1 + " y " + numero2 + " es: " + suma);
console.log("La resta de " + numero1 + " y " + numero2 + " es: " + resta);
console.log(
  "La multiplicacion de " + numero1 + " y " + numero2 + " es: " + multiplicacion
);
console.log("La division de " + numero1 + " y " + numero2 + " es: " + division);
alert("el resultado de la suma es " + suma);
