var cuboMuestra=document.getElementById("muestra")

class Persona{
  constructor(nombreCompleto,email,telefono,dni,fechaDeNacimiento,domicilio,localidad){
    this.nombre=nombreCompleto
    this.fechaDeNacimiento=fechaDeNacimiento
    this.domicilio=domicilio
    this.email=email
    this.telefono=telefono
    this.localidad=localidad
    this.estudios=[]
    this.experienciaLaboral=[]
  }
  agregarEducacion(titulo,proceso,instituto){
    this.estudios.push({titulo,proceso,instituto})
  }
  agregarExperiencia(empresa,tiempoDeTrabajo,tareasRealizadas){
    this.experienciaLaboral.push({empresa,tiempoDeTrabajo,tareasRealizadas})
  }
  mostrarExperiencia(){
    return this.experienciaLaboral.map(experiencia =>
      `Empresa: ${experiencia.empresa}<br>Periodo de trabajo: ${experiencia.tiempoDeTrabajo}<br>Tareas realizadas: ${experiencia.tareasRealizadas}</li>`
    ).join("");
  }
  mostrarEstudios(){
    return this.estudios.map(estudio =>
      `${estudio.titulo} (${estudio.proceso})<br>${estudio.instituto}</li>`
    ).join("");
  }
  mostrarDatos() {
    return `Nombre: ${this.nombre}<br>
    Fecha de nacimiento: ${this.fechaDeNacimiento}<br>
    Domicilio: ${this.domicilio}<br>
    Email:${this.email}<br>
    Telefono de contacto:${this.telefono}<br>
    Localidad: ${this.localidad}`
  }
 
 }


soyMiPersona=new Persona("Miguel Angel Salas", "miguelsalas1994@outlook.com",1123909529,38049111,"13-09-1994","Achupallas 55","Temperley")
soyMiPersona.agregarEducacion("Bachiller en economia y gestion","Completo","CENS N°454")
soyMiPersona.agregarExperiencia("Cybernet","17-12-2024 al 17-12-2024","Empleado de comercio")
function datosPersonales() {
  if (cuboMuestra.hasChildNodes()){
    cuboMuestra.innerHTML=""
  }
  var datos=document.createElement("li")
  datos.innerHTML=soyMiPersona.mostrarDatos()
  cuboMuestra.appendChild(datos)
}
function estudios(){
  if (cuboMuestra.hasChildNodes()){
    cuboMuestra.innerHTML=""
  }
    var datosEducacion=document.createElement("li")
    datosEducacion.innerHTML=soyMiPersona.mostrarEstudios()
    cuboMuestra.appendChild(datosEducacion)    
}
function mostrarExperienciaLaboral(){
  if (cuboMuestra.hasChildNodes()){
    cuboMuestra.innerHTML=""
  }
    var datosExperiencia=document.createElement("li")
    datosExperiencia.innerHTML=soyMiPersona.mostrarExperiencia()
    cuboMuestra.appendChild(datosExperiencia)    
}
























