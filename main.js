let nombre = prompt("¿Cómo te llamas?");
if (nombre === "" || nombre === null) {
  nombre = bucle(nombre);
}
alert("¡Es un gusto tenerte en mi porfolio, " + nombre + "!");

let miArray = [];
let anioDeNacimiento = prompt("¿En qué año naciste?");
let edad = parseFloat(2024 - anioDeNacimiento);
if (anioDeNacimiento === "" || anioDeNacimiento === null) {
  alert("Tu edad es o va a ser en este año, ¡ah no pones nada, estamos chistosos!");
} else {
  miArray.push("Esto es lo que sé de vos hasta ahora");
  miArray.push(nombre);
  miArray.push(edad);
  let mensaje = miArray.join("\n");
  alert(mensaje);
}

let confirmacion = prompt("¿Quieres ver si está lo que viniste a buscar?");
if (confirmacion === "" || confirmacion === null) {
  confirmacion = bucle(confirmacion);
}
let confirmacionB = confirmacion.toLowerCase();
let nacionalidad;
if (confirmacionB === "si" || confirmacionB === "yes") {
  alert("Por fin mi salida de Latinoamérica");
  nacionalidad = prompt("¿De dónde sos?");
  miArray.push(nacionalidad);
  for (let i = 1; i > 0; i--) {
    alert("NO TE ESPERAS LO QUE SE VIENE");
    alert("ACA SE VIENE LO QUE ANDAS BUSCANDO");
    alert("LLEGO TU MOMENTO");
  }
} else if (confirmacionB === "no") {
  alert("And now, the end is near");
} else {
  alert("El número que usted solicita no pertenece a un abonado en servicio");
}

function bucle(parametroA) {
  while (parametroA === "" || parametroA === null) {
    parametroA = prompt("Volver a intentar");
  }
  return parametroA;
}

class Persona {
  constructor(nombrePersona, edadPersona) {
    this.nombrePersona = nombrePersona;
    this.edadPersona = edadPersona;
  }
}

let personas = [];
let persona1 = new Persona(nombre, edad);
personas.push(persona1);

let nombreFiltrado = prompt("Escribe el nombre que quieres filtrar");
const personasFiltradas = personas.filter(function(persona) {
  return persona.nombrePersona === nombreFiltrado;
});

if (personasFiltradas.length > 0) {
  alert("Persona encontrada: " + personasFiltradas[0].nombrePersona);
} else {
  alert("Persona no encontrada");
}