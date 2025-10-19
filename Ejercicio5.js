let productos = [
  { codigo: "P001", nombre: "Camisa", precio: 30000, stock: 10, estado: "disponible" },
  { codigo: "P002", nombre: "Pantalón", precio: 50000, stock: 5, estado: "disponible" }
];

function agregarProducto(codigo, nombre, precio, stock, estado) {
  let existe = productos.some(p => p.codigo === codigo);
  if (existe) {
    console.log("ya existe un producto con ese código.");
  } else if (precio <= 0 || stock < 0) {
    console.log("datos inválidos.");
  } else {
    productos.push({ codigo, nombre, precio, stock, estado });
    console.log("producto agregado.");
  }
}

function actualizarStock(codigo, nuevoStock) {
  let p = productos.find(p => p.codigo === codigo);
  if (p) {
    p.stock = nuevoStock;
    p.estado = nuevoStock > 0 ? "disponible" : "agotado";
    console.log("stock actualizado.");
  } else {
    console.log("producto no encontrado.");
  }
}

function listarProductos() {
  console.log("inventario ordenado por nombre:");
  productos
    .sort((a, b) => a.nombre.localeCompare(b.nombre))
    .forEach(p => console.log(p));
}

agregarProducto("P003", "zapatos", 60000, 0, "agotado");
actualizarStock("P002", 8);
listarProductos();
