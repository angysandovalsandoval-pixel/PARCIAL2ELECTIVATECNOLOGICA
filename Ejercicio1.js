let estudiantes = [
  { nombre: "Ana", apellido: "Gómez", cedula: "123" },
  { nombre: "Carlos", apellido: "Sainz", cedula: "456" },
  { nombre: "Camila", apellido: "López", cedula: "789" }
];

function buscarPorCedula(cedula) {
  
  let encontrado = estudiantes.find(est => est.cedula === cedula);

  if (encontrado) {
    console.log("estudiante encontrado:");
    console.log(encontrado);
  } else {
    console.log("no se encontró ningún estudiante con esa cédula.");
  }
}

buscarPorCedula("456");  
buscarPorCedula("999");  









