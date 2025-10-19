let libros = [];

function agregarLibro(titulo, autor, año, isbn) {
  libros.push({ titulo, autor, año, isbn });
  console.log("libro agregado con éxito.");
}

function listarLibros() {
  console.log("lista de libros:");
  libros.forEach(libro => console.log(libro));
}

function buscarLibro(criterio) {
  let resultados = libros.filter(lib => 
    lib.titulo.toLowerCase().includes(criterio.toLowerCase()) ||
    lib.autor.toLowerCase().includes(criterio.toLowerCase())
  );

  if (resultados.length > 0) {
    console.log("libros encontrados:");
    console.log(resultados);
  } else {
    console.log("no se encontraron libros con ese criterio");
  }
}


agregarLibro("cien años de soledad", "Gabriel García Márquez", 1967, "001");
agregarLibro("el amor en los tiempos del cólera", "Gabriel García Márquez", 1985, "002");
listarLibros();
buscarLibro("Gabriel");
