const totalCompra = 1350;
const costoEnvioNormal = 99;

const envio = totalCompra >= 1000 ? 0 : costoEnvioNormal;

const totalFinal = totalCompra + (totalCompra >= 1000 ? 0 : costoEnvioNormal); 

console.log(`Total a pagar: $${totalFinal}`);
