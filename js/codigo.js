//Secciones
const seccionPortada = document.getElementById("seccionPortada");
const seccionActividad = document.getElementById("seccionSeleccionarActividad");
const seccionMapa = document.getElementById("verMapa");
const seccionAreas = document.getElementById("seccionAreas");
const seccionDatos = document.getElementById("solicitudDeDatos");
const seccionBody = document.getElementById("cuerpo");
const seccionOrganigrama = document.getElementById("seccionOrganigrama");
const seccionSmps = document.getElementById("seccionSmps");
const seccionJsras = document.getElementById("seccionJsras");
const seccionCalendars = document.getElementById("seccionCalendars");
const seccionOpls = document.getElementById("seccionOpls");
const seccionContactos = document.getElementById("seccionContactos");
 
//Contenedores
const contenedorTareas=document.getElementById("contenedorOpciones");
const contenedorActividades=document.getElementById("contenedorActividades");
const contenedorDatos = document.getElementById("contenedorDatos");
 
//Opciones Tareas
let inputPlanEntrenamiento
let inputOrganigrama
let inputAreas
let inputSmps
let inputJsra
let inputCalendars
let inputOpls
let inputContactos
 
//Opciones Actividades de plan de 
//entrenamiento
let inputDesenergizadoMaster
let inputTapadoGoteras
let inputTomaLecturas
 
let inputNombre=document.getElementById("nombre")
let inputTurno=document.getElementById("fecha")
let inputIngreso=document.getElementById("turno")
 
//Botones
let botonSeleccionarTarea=document.getElementById("botonSeleccionar")
let botonSeleccionarActividad=document.getElementById("botonSeleccionarActividad")
let botonDatos=document.getElementById("botonDatos")
 
let actividades=[]
let tareas=[]
let opcionDeTareas
let opcionDeActividades
let opcionDatos
 
 
class Tarea{
    constructor(id, n){
        this.id = id
        this.nombre=n
    }
}
 
class Actividad{
    constructor(id, n){
        this.id=id
        this.nombre=n
    }
}
 
let planEntrenamiento= new Tarea("planEntrenamiento", "Plan de Entrenamiento");
let organigrama= new Tarea("organigrama", "Organigrama del equipo");
let areas= new Tarea("area", "Areas del Departamento");
let smps = new Tarea("smps", "SMPs");
let jsra = new Tarea("jsra", "JSRA");
let calendars = new Tarea("calendars", "AM/PM Calendars");
let contactos = new Tarea("contactos", "Contactos");
let opls = new Tarea("opls", "OPLs")
 
let desenergizarMaster= new Actividad("desenergizadoMaster", "Desenergizado de Master Pack")
let reparacionGoteras= new Actividad("tapadoGoteras", "Tapado de goteras")
let tomaLecturas= new Actividad("tomaLecturas", "Toma de lecturas")
 
actividades.push(desenergizarMaster, reparacionGoteras, tomaLecturas)
tareas.push(areas, smps, jsra, opls, calendars, planEntrenamiento, contactos, organigrama)
 
window.addEventListener("load", start)
 
function start(){
    seccionOrganigrama.style.display="none";
    seccionActividad.style.display="none";
    seccionMapa.style.display="none";
    seccionDatos.style.display="none";
    seccionAreas.style.display="none";
    seccionSmps.style.display = "none";
    seccionJsras.style.display = "none";
    seccionCalendars.style.display = "none";
    seccionOpls.style.display = "none";
    seccionContactos.style.display = "none";
    seccionBody.style.backgroundImage="url(https://jesusramon2192.github.io/faciliapp/assets/brand_wall.jpg)";
    tareas.forEach((tarea) => {
        opcionDeTareas=
        `<input type="radio" name="tarea" id=${tarea.id} />
        <label class="estiloTarea" for=${tarea.id}>
            <p>${tarea.nombre}</p> 
        </label> `
        contenedorTareas.innerHTML += opcionDeTareas
 
        inputPlanEntrenamiento = document.getElementById("planEntrenamiento");
        inputOrganigrama = document.getElementById("organigrama");
        inputAreas = document.getElementById("area");
        inputSmps = document.getElementById("smps");
        inputJsra = document.getElementById("jsra");
        inputCalendars = document.getElementById("calendars");
        inputContactos = document.getElementById("contactos");
        inputOpls = document.getElementById("opls");
    })
    botonSeleccionarTarea.addEventListener("click", seleccionarTarea)
}
 
function seleccionarTarea() {
    if(inputPlanEntrenamiento.checked){
        seccionDatos.style.display="grid"
        datosRequest()


    } else if (inputOrganigrama.checked) {
        seccionOrganigrama.style.display="flex"


    } else if (inputAreas.checked){
        seccionAreas.style.display="grid"
        paginaAreas()


    } else if (inputSmps.checked){
        seccionSmps.style.display = "grid"


    } else if (inputJsra.checked) {
        seccionJsras.style.display = "grid"


    } else if (inputCalendars.checked) {
        seccionCalendars.style.display = "grid"


    } else if (inputOpls.checked) {
        seccionOpls.style.display = "grid"


    } else if (inputContactos.checked) {
        seccionContactos.style.display = "grid"


    } else {
        alert("Selecciona una opcion para avanzar")
        location.reload()
    }
    seccionPortada.style.display="none"
}
 
function datosRequest() {
    contenedorDatos
    seccionBody.style.backgroundImage="url(https://jesusramon2192.github.io/faciliapp/assets/Stellantis-and-the-circular-economy.jpg)"
    seccionDatos.style.display="flex"
    botonDatos.addEventListener("click", planDeEntrenamiento)
}
 
function planDeEntrenamiento() {
    if(inputNombre.value == "" || inputTurno.value == "" || inputIngreso.value == "") {
        alert("Rellena los campos")
    } else {
    seccionDatos.style.display="none"
    seccionActividad.style.display="flex"
    actividades.forEach((actividad) => {
        opcionDeActividades=
        `<input type="radio" name="actividad" id=${actividad.id}>${actividad.nombre}</input> 
        <label class="tarjetaactividad" for=${actividad.id}>
        </label> <br><br>`
        contenedorActividades.innerHTML += opcionDeActividades
 
        inputDesenergizadoMaster=document.getElementById("desenergizadoMaster")
        inputTapadoGoteras=document.getElementById("tapadoGoteras")
        inputTomaLecturas=document.getElementById("tomaLecturas")
    })
    botonSeleccionarActividad.addEventListener("click", seleccionarActividadEnetrenamiento())
    }       
}
 
function paginaAreas() {
    seccionBody.style.backgroundImage="url(https://jesusramon2192.github.io/faciliapp/assets/STELLA-hero-img-HP-TECH-electrification.jpg)"
    seccionBody.style.height="100%"
}
 
function seleccionarActividadEnetrenamiento() {
    
}