/* Ejercicio 21 */

const producto = {
nombre: "Teclado mecánico",
precio: 1200,
cantidad: 2,
stock: 5,
disponible: true
};
let subtotal = producto.precio * producto.cantidad;
let descuento = 0;
let total = 0;

if (producto.disponible && producto.stock >= producto.cantidad) {
  
  if (subtotal >= 2000) {
    descuento = subtotal * 0.10;
  }
  
  total = subtotal - descuento;
  
  console.log(`Compra procesada para: ${producto.nombre}`);
  console.log(`Subtotal: $${subtotal}`);
  console.log(`Descuento: $${descuento}`);
  console.log(`Total a pagar: $${total}`);

} else {
  console.log("No se puede realizar la compra: producto no disponible o fuera de stock.");
}