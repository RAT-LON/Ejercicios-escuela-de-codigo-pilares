const totalCompra = 2750;
let descuento = 0;
let totalFinal = 0;



if (totalCompra >= 3000) {
  descuento = 0.15; 
} else if (totalCompra >= 1500) {
  descuento = 0.10; 
} else {
  descuento = 0;   
}

totalFinal = totalCompra - (totalCompra * descuento);

console.log(`Monto original: $${totalCompra}`);
console.log(`Descuento aplicado: ${descuento * 100}%`);
console.log(`Total a pagar: $${totalFinal}`);