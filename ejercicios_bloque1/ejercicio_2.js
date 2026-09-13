/* Ejercicio 2 */

const producto1 = "Teclado";
const precio1 = 850;
const cantidad1 = 2;
const producto2 = "Mouse";
const precio2 = 450;
const cantidad2 = 1;
const producto3 = "Monitor";

const precio3 = 3200;
const cantidad3 = 1;

const productos1 = precio1 * cantidad1;
console.log(productos1);

const productos2 = precio2 * cantidad2;
console.log(productos2);

const productos3 = precio3 * cantidad3;
console.log(productos3);

const total = productos1 + productos2 + productos3;
console.log(total);

console.log(
  `Resumen de compra: 
  ${producto1}: ${productos1} 
  ${producto2}: ${productos2} 
  ${producto3}: ${productos3} 
su total es de: ${total} 
Gracias por su compra :D`,
);