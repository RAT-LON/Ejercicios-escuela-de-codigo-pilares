const producto = {
nombre: "Laptop",
precio: 15000
};
const especificaciones = {
ram: "16 GB",
almacenamiento: "512 GB",
color: "Negro"
};

const laptop = {
  ...producto,
  ...especificaciones,
  disponible: true
};
console.log(producto);
console.log(especificaciones);
console.log(laptop);