const botonBorrarTodo = document.getElementById("borrarTodo");
const contador = document.getElementById("contador");
const completadas = document.getElementById("completadas");
const pendientesContador =
document.getElementById("pendientesContador");
const botonModoOscuro = document.getElementById("modoOscuro");
const modoGuardado = localStorage.getItem("modo");
const botonTodas = document.getElementById("todas");
const botonPendientes = document.getElementById("pendientes");
const botonHechas = document.getElementById("hechas");
botonTodas.classList.add("activo");
botonTodas.addEventListener("click", function () {
    botonTodas.classList.add("activo");
botonPendientes.classList.remove("activo");
botonHechas.classList.remove("activo");
 
const tareas = document.querySelectorAll("li");
 
tareas.forEach(function (tarea) {
tarea.style.display = "list-item";
});
 
});
 
if (modoGuardado == "oscuro") {
botonModoOscuro.textContent = "☀️ Modo claro";
}
 
if (modoGuardado === "oscuro") {
document.body.classList.add("oscuro");
}
 
let totalTareas = 0;
let tareas = [];
 
let datosGuardados = localStorage.getItem("tareas");
 
if (datosGuardados !== null) {
tareas = JSON.parse(datosGuardados);
}
const boton = document.getElementById("anadir");
const input = document.querySelector("input");
const lista = document.getElementById("listaTareas");
const prioridad = document.getElementById("prioridad");
for (let i = 0; i < tareas.length; i++) {
 
crearTarea(tareas[i]);
 
}
totalTareas = tareas.length;
const tareasCompletadas =
document.querySelectorAll(".completada").length;
 
completadas.textContent =
"Completadas: " + tareasCompletadas;
 
const pendientes =
totalTareas - tareasCompletadas;
 
pendientesContador.textContent =
"Pendientes: " + pendientes;
 
contador.textContent = "Tareas: " + totalTareas;
 
function crearTarea(tarea) {
 
const nuevaTarea = document.createElement("li");
 
nuevaTarea.textContent =
tarea.texto + " | " + tarea.fechaHora;
 
if (tarea.completada === true) {
nuevaTarea.classList.add("completada");
}
nuevaTarea.addEventListener("click", function () {
 
nuevaTarea.classList.toggle("completada");
 
tarea.completada = !tarea.completada;
 
localStorage.setItem("tareas", JSON.stringify(tareas));
 
const tareasCompletadas =
document.querySelectorAll(".completada").length;
 
completadas.textContent =
"Completadas: " + tareasCompletadas;
 
pendientesContador.textContent =
"Pendientes: " + (totalTareas - tareasCompletadas);
 
});
 
const botonEliminar = document.createElement("button");
 
botonEliminar.textContent = "Eliminar";
 
botonEliminar.addEventListener("click", function (event) {
 
event.stopPropagation();
 
tareas = tareas.filter(function(item) {
return item !== tarea;
});
 
localStorage.setItem("tareas", JSON.stringify(tareas));
 
totalTareas--;
 
contador.textContent = "Tareas: " + totalTareas;
 
nuevaTarea.remove();
});
 
nuevaTarea.appendChild(botonEliminar);
 
lista.appendChild(nuevaTarea);
}
boton.addEventListener("click", function () {
 
const texto = input.value;
const nivel = prioridad.value;
 
if (texto === "") {
return;
}
 
const nuevaTarea = {
texto: texto,
completada: false,
fechaHora: new Date().toLocaleString()
};
 
tareas.push(nuevaTarea);
 
localStorage.setItem("tareas", JSON.stringify(tareas));
 
crearTarea(nuevaTarea);
 
totalTareas++;
 
contador.textContent = "Tareas: " + totalTareas;
 
input.value = "";
 
});
botonBorrarTodo.addEventListener("click", function () {
 
const confirmar = confirm("¿Seguro que quieres borrar todas las tareas?");
 
if (!confirmar) {
return;
}
 
lista.innerHTML = "";
 
totalTareas = 0;
 
contador.textContent = "Tareas: 0";
 
tareas = [];
 
localStorage.removeItem("tareas");
 
completadas.textContent = "Completadas: 0";
 
pendientesContador.textContent = "Pendientes: 0";
});
``
botonModoOscuro.addEventListener("click", function () {
    if (document.body.classList.contains("oscuro")) {
botonModoOscuro.textContent = "☀️ Modo claro";
} else {
botonModoOscuro.textContent = "🌙 Modo oscuro";
}
 
document.body.classList.toggle("oscuro");
 
if (document.body.classList.contains("oscuro")) {
localStorage.setItem("modo", "oscuro");
} else {
localStorage.setItem("modo", "claro");
}
 
});
botonPendientes.addEventListener("click", function () {
    botonPendientes.classList.add("activo");
botonTodas.classList.remove("activo");
botonHechas.classList.remove("activo");
 
const tareas = document.querySelectorAll("li");
 
tareas.forEach(function (tarea) {
 
if (tarea.classList.contains("completada")) {
tarea.style.display = "none";
} else {
tarea.style.display = "list-item";
}
 
});
 
});
botonHechas.addEventListener("click", function () {
    botonHechas.classList.add("activo");
botonTodas.classList.remove("activo");
botonPendientes.classList.remove("activo");
 
const tareas = document.querySelectorAll("li");
 
tareas.forEach(function (tarea) {
 
if (tarea.classList.contains("completada")) {
tarea.style.display = "list-item";
} else {
tarea.style.display = "none";
}
 
});
 
});