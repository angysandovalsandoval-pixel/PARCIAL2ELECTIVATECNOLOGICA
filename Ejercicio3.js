let estudiantes = [
  { id: "1", nombre: "Ana", apellido: "Pérez", edad: 20 },
  { id: "2", nombre: "Luis", apellido: "Gómez", edad: 22 }
];


function agregarEstudiante(id, nombre, apellido, edad) {
  estudiantes.push({ id, nombre, apellido, edad });
  console.log("Estudiante agregado.");
}

function listarEstudiantes() {
  console.log("Lista de estudiantes:");
  estudiantes
    .sort((a, b) => a.apellido.localeCompare(b.apellido))
    .forEach(e => console.log(e));
}


function buscarEstudiante(id) {
  let e = estudiantes.find(e => e.id === id);
  console.log(e ? e : "Estudiante no encontrado.");
}


function actualizarEstudiante(id, nuevoNombre, nuevoApellido, nuevaEdad) {
  let e = estudiantes.find(e => e.id === id);
  if (e) {
    e.nombre = nuevoNombre;
    e.apellido = nuevoApellido;
    e.edad = nuevaEdad;
    console.log("Datos actualizados.");
  } else console.log("Estudiante no encontrado.");
}


function eliminarEstudiante(id) {
  let index = estudiantes.findIndex(e => e.id === id);
  if (index !== -1) {
    estudiantes.splice(index, 1);
    console.log("estudiante eliminado.");
  } else console.log("no existe el estudiante.");
}


agregarEstudiante("3", "María", "López", 19);
listarEstudiantes();
buscarEstudiante("2");
actualizarEstudiante("1", "Ana María", "Pérez", 21);
eliminarEstudiante("3");
listarEstudiantes();

