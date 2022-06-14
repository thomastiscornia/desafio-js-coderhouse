// Practica primera clase

/*
let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido")
const bienvenida = "Bienvenido!" + " " + nombre + " " + apellido;

alert(bienvenida);

let numeroIngresado1 = parseInt(prompt("Ingrese un numero"));
let numeroIngresado2 = parseInt(prompt("Ingrese otro numero"));
let resultado = numeroIngresado1 + numeroIngresado2 + 10;
alert(resultado);
*/



//Practica Segunda clase

/*
let numeroGanador = 8

alert("Bienvenido a la loteria, debes acertar el numero ganador!");
let numeroUsuario = parseInt(prompt("Inserte un numero para participar"));
if(numeroUsuario == numeroGanador){
    alert("Felicidades, ganaste la loteria!")
}else{
    alert("Numero incorrecto! Sigue participando :(")
};
*/


/*
let nota = parseInt(prompt("Ingrese su nota del examen aqui (Del 0 al 5)"));

if(nota == 0){
    alert("Nota: Muy deficiente")
}
else if(nota == 1){
    alert("Nota: Insuficiente")
}
else if(nota == 2){
    alert("Nota: Suficiente")
}
else if(nota == 3){
    alert("Nota: Bien")
}
else if(nota == 4){
    alert("Nota: Notable")
}
else if(nota == 5){
    alert("Nota: Sobresaliente")
}
else{
    alert("Numero incorrecto, ingrese del 0 al 5")
}
*/


/*
let contraseña = "thoto123"
let nombreUsuario = prompt("Ingrese su nombre");
let contraseñaIngresada = prompt("Ingrese la contraseña");

if ((nombreUsuario !="") && (contraseñaIngresada == contraseña)){
    alert("Bienvenido!" + " " + nombreUsuario)
}else ((nombreUsuario == "") || (contraseñaIngresada !=contraseña));{
    alert("Contraseña erronea o ingrese un nombre de usuario valido")
}
*/

/*
let numeroIngresado = prompt("Ingrese su nota");
let resultado = numeroIngresado / 2;

if(resultado >= 6){
    alert("Aprobado")
}else{
    alert("Desaprobado")
}
*/



//Practica Tercera clase

/*
let counter = 0;
let userNumber;

for (let index = 1; index <= 3; index++) {
    userNumber = parseInt(prompt("Ingrese la nota del alumno"));
    if( userNumber >= 6){
        counter = counter + 1;
    }
}

alert("Hay "+counter+" alumnos aprobados");
*/

/*
let repetir = true

while(repetir){
    let edad = +(prompt("Ingrese su edad"))
    if(edad>=18){
        repetir = false
        alert("Bienvenido")
    }else{
        alert("Acceso denegado!")
    }
}
*/

/*
let nombre = prompt("Ingrese su nombre")

while(nombre != "ESC"){
    switch (nombre) {
        case "Thomas":
            alert("Hola " + nombre);
            break;
        case "Juan":
            alert("Hola Juan");
            break;
        default:
            alert("Ingrese un nombre valido")
            break;
    }
    nombre = prompt("Ingrese su nombre")
}
*/

//Practica Cuarta clase
/*
function cuenta () {
    let NumeroUno = parseInt(prompt("ingrese el primer numero"));
    let NumeroDos = parseInt(prompt("ingrese el segundo numero"));
    let resultado = NumeroUno + NumeroDos;

    if ((NumeroUno != "") && (NumeroDos != "")){
        alert("El resultado es " + resultado)
    }else{
        alert("Ingrese un valor valido")
    }
    
}

cuenta ();
*/



// --------------------------------------------------------
/*
/**
 * Descripcion: Calculadora que solo multiplica
 * @param {number} NumeroUno 
 * @param {number} NumeroDos 
 */

/*
function calculadora(NumeroUno, NumeroDos){
    for(let i = NumeroUno; i <= NumeroDos; i++){
        console.log(NumeroUno + " x " + i + " = " + NumeroUno * NumeroDos)
    }
}

calculadora (prompt("Ingrese un numero"), prompt("Cuantas veces quiere multiplicar?"))
*/
// --------------------------------------------------------



/*
function tablaDeMultiplicar (tabla, hasta){
    for(let i = 0; i <= hasta; i++){
        console.log(tabla + " x " + i + " = " + tabla * i)
    }
}

tablaDeMultiplicar (prompt("Ingrese el numero de tabla que quiera multiplicar"), prompt("Cuantas veces quiere multiplicar?"))
*/

/*
let operacion = prompt("+ o -")

if(operacion == "+"){
    const suma = (a, b) => a + b;
    alert("El resultado es: " + suma(20, 20));
}else if (operacion == "-"){
    const resta = (a, b) => a - b;
        alert("El resultado es: " + resta(20, 20));
}else{
    alert("Seleccione una operacion valida")
}
*/

//Practica quinta clase
let nombreEmpresa = "MacDonalds"

function Empleados (nombre, edad, fechaIngreso){
    this.nombre = nombre;
    this.edad = edad;
    this.empresa = nombreEmpresa;
    this.fechaIngreso = fechaIngreso;
}

//CambioNombre()

const empleado1 = new Empleados (prompt("Ingrese su nombre"), 25, "18/8/2022")

function CambioNombre (){
    nombreEmpresa = prompt("Ingrese el nombre de la empresa")
}


//console.log(empleado1)

const personal = {
    nombre: "homero",
    edad: 39,
    calle: "av asdsa"
}

for(let i in personal){
    console.log(personal [i])
}
//console.log(personal)
//console.log(personal.nombre)