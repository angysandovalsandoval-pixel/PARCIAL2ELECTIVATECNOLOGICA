const IVA = 0.19;
let productos = [
  { precio: 10000, cantidad: 2 },
  { precio: 5000, cantidad: 3 },
  { precio: 8000, cantidad: 1 }
];

function calcularCompra(productos) {
  let subtotal = 0;
  for (let p of productos) {
    if (p.precio > 0 && p.cantidad > 0) {
      let totalParcial = p.precio * p.cantidad;
      subtotal += totalParcial;
    } else {
      console.log("datos inválidos en un producto.");
    }
  }
  let iva = subtotal * IVA;
  let total = subtotal + iva;

  console.log("subtotal:", subtotal);
  console.log("IVA (19%):", iva);
  console.log("total a pagar:", total);
}
calcularCompra(productos);

