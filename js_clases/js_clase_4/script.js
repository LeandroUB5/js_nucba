// function sumar(num1, num2) {
//   let resultado = num1 + num2;
//   //alert(`El resultado de la suma es ${resultado}`);
//   console.log(resultado);
// }
// sumar(5, 25);
// sumar(48, 5);
// sumar(885, 15);
// sumar(15, 29);

// // function tradicional
// function saludar(nombre) {
//   return `Hola! ${nombre}`;
// }
// let mensajesaludo = saludar("Pedro");
// console.log(mensajesaludo);

// // arrow function

// const despedir = (nombre) => `Adios ${nombre}`;

// let mensajedespedida = despedir(`pedro`);
// console.log(mensajedespedida);

// //function recursiva
// function factorial(n) {
//   if (n <= 1) return 1; // n=5
//   return n * factorial(n - 1); //5*4*3*2*1
// }

// let resultado = factorial(5);

// console.log(resultado);

//callback

// const alerthola = (nombre) => {
//   return alert(`Hola! ${nombre}`);
// };

// const consolehola = (nombre) => {
//   return console.log(`Hola! ${nombre}`);
// };
// const procesarEntrada = (callback) => {
//   const nombre = prompt("Por favor ingrese su nombre");
//   callback(nombre);
// };
// procesarEntrada(consolehola); // podria cambiar el argumento por alerthola
