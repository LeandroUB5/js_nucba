// Solo pueden acceder a la discoteca mayores de 18 años

// let edad = parseInt(prompt("Ingrese su edad"));

// if (edad >= 18) {
//   console.log("Bienvenido usted puede entrar");
// } else {
//   console.log("Usted es muy pequeño, no puede ingresar");
// }

// console.log("Gracias por acercarse a nuestro local");

//Solo ingresan gratis aquellas personas mayores de 25 y menores de 50

// let edad = parseInt(prompt("Ingrese su edad"));

// if (edad >= 25 && edad <= 50) {
//   console.log("Usted ingresa gratis");
// } else {
//   console.log("Usted debe pagar entrada");
// }

// Si es menor de 18 no ingresa, si es mayor de 60 llamamos a la policia. Sino ingresa sin problemas.

// let edad = parseInt(prompt("Ingrese su edad"));

// if (edad < 18) {
//   // Buscando menores de 18 años
//   console.log("Sos muy chico anda a tu casa");
// } else if (edad > 60) {
//   // Buscando mayores de 60 años
//   console.log("La policia ya esta en camino");
// } else {
//   // Todos los demas
//   console.log("Adelante, sea bienvenido");
// }

///////////////// switch ////////////////

// let fruta = prompt("Ingrese su fruta favorita").toLowerCase();
// // .toLowerCase (Transforma todo a minuscula)
// // .toUpperCase (Transforma todo a mayuscula)

// switch (fruta) {
//   case "banana":
//     console.log("La Banana es amarilla");
//     break;
//   case "manzana":
//     console.log("La Manzana puede ser roja o verde");
//     break;
//   case "frutilla":
//     console.log("La Frutilla es roja");
//     break;
//   default:
//     console.log("No trabajamos esa fruta");
// }

///////////////// Operador Ternario ////////////////

// Condicion: Si hay sol voy a la playa

let clima = "sol";
if (clima == "sol") {
  console.log("Voy a la playa");
} else {
  console.log("Me quedo en mi casa");
} // normal

clima == "sol"
  ? console.log("Voy a la playa")
  : console.log("Me quedo en casa");
