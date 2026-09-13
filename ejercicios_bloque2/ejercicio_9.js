/* Ejercicio 9 */

const computadora = {
marca: "Lenovo",
modelo: "ThinkPad",
precio: 18500,
hardware: {
procesador: "Intel Core i7",
ram: "16 GB",
almacenamiento: "512 GB SSD"
}
};

console.log(computadora.hardware.procesador, computadora.hardware.ram);
console.log(`el equipo de la marca ${computadora.marca},modelo ${computadora.modelo}, cuenta con ${computadora.hardware.almacenamiento}  `);