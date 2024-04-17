/////////////////var////////////////

// Declaro una variable con var y puedo volver a declararla. Eso puede ser peligroso

var nombre = "Juan";
var nombre = "Laura";
console.log(nombre);

/////////////////let|////////////////

// declaro una variable con let y no puedo volver a declararla pero si puedo reasignarla
let producto15 = "empanada";

// let producto15="alfajor" no puedo volver a declararla
producto15 = "alfajor";
console.log(producto15);

/////////////////const////////////////

// Si declaro una variable con const esta no puede ser reasignada
const dni = 25252525;

// dni = 43434343;  No puedo reasignar porque es constante
console.log(dni);

/////////////////Operadores de asignacion////////////////
let contador = 52;
console.log(contador);

contador += 10;
console.log(contador);

contador = contador + 10;
console.log(contador);

/////////////////Operadores aritmeticos////////////////

let num1 = 15;
let num2 = 25;

console.log(num1 + num2); //Suma
console.log(num1 - num2); //Resta
console.log(num1 * num2); //Multiplicacion
console.log(num1 / num2); //Division
console.log(num1 % num2); //Resto

contador++;
console.log(contador);

/////////////////Operadores de comparacion////////////////

let num4 = 1;
let num5 = 10;

console.log(num4 < num5); // menor
console.log(num4 > num5); // mayor
console.log(num4 <= num5); // menor e igual
console.log(num4 >= num5); // mayor e igual
console.log(num4 == num5); // igual
console.log(num4 != num5); // desigual

let variable1 = "15"; //string
let variable2 = 15; //number

console.log(variable1 == variable2); // == compara solo el valor

console.log(variable1 === variable2); // === compara valor y tipo de dato
console.log(variable1 !== variable2); // !== desigualdad estricta

/////////////////Operadores logicos////////////////

//AND y OR

// Cuando uso AND && necesito que ambas afirmaciones sean verdaderas para que todo sea verdadero.

// Cuando uso or || necesito que solo una de esas afirmaciones sea verdadera para que todo sea considerado verdadera.

let numero1 = 15;
let numero2 = 26;

console.log(numero1 < 20 && numero1 > 18);
//              true        false       = false

console.log(numero1 < 20 || numero1 > 18);
//              true        false       = true
