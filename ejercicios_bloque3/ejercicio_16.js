/* Ejercicio 16*/

const edad = 20;
const tieneBoleto = false;
const tieneInvitacion = true;

if (edad >= 18 && (tieneBoleto || tieneInvitacion)) {
  console.log("Puede entrar al evento");
} else {
  console.log("No puede entrar al evento");
}