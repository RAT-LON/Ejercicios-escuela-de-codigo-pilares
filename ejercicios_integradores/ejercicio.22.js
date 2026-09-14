/* Ejercicio 22 */

const estudiante = {
  nombre: "Mariana",
  edad: 19,
  promedio: 8.8,
  inscrito: true,
  correoVerificado: true
};

if (estudiante.inscrito && estudiante.correoVerificado) {
  console.log(`Acceso permitido para ${estudiante.nombre}.`);
} else {
  console.log(`Acceso denegado para ${estudiante.nombre}.`);
}

let clasificacion = "";

if (estudiante.promedio >= 9) {
  clasificacion = "Excelente";
} else if (estudiante.promedio >= 8) {
  clasificacion = "Bueno";
} else if (estudiante.promedio >= 6) {
  clasificacion = "Suficiente";
} else {
  clasificacion = "Insuficiente";
}

console.log(`Rendimiento de ${estudiante.nombre}: ${clasificacion} (${estudiante.promedio})`);