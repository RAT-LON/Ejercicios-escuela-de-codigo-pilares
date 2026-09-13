/* Ejercicio 4 */

const edad = 22;
const cuentaActiva = true;
const correoVerificado = true;
const tieneSuscripcion = false;

console.log(edad >= 18);
console.log(edad >= 18 && cuentaActiva && correoVerificado);
console.log(tieneSuscripcion || cuentaActiva);
console.log(!tieneSuscripcion);
