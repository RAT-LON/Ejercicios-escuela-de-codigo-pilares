/* Ejercicio 8 */

const producto = {
nombre: "Monitor",
marca: "Samsung",
precio: 3500,
disponible: true,
categoria: "Tecnología",
};

console.log(producto.nombre , producto.precio);
producto.precio = 3200
producto.stock = 15;
delete producto.categoria
console.log(producto);