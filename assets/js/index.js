let userName = prompt("Ingresa tu nombre")
 if(!userName){
     alert('Usted no inserto nombre de usuario, por favor vuelva a intentarlo')
 }
 else{
     alert(`Hola ${userName} ¿Como esta?`)
 }
 let userAge = parseInt(prompt('Que edad tiene?'))
 if(userAge>=18){
     alert('Puede acceder')
 }
 else{
     alert('Denegado hasta que tenga 18 años')
 }


//WHILE
/// let userName = prompt("Ingresa tu nombre")
// if(!userName){
//     alert('Usted no inserto nombre de usuario, por favor vuelva a intentarlo')
// }
// else{
//     alert(`Hola ${userName} ¿Como esta?`)
// }
// let userAge = parseInt(prompt('Que edad tiene?'))
// if(userAge>=18){
//     alert('Puede acceder')
// }
// else{
//     alert('Denegado hasta que tenga 18 años')
// }


//WHILE
//let repetir = true

//while(repetir) {
//    let nro = parseInt(prompt("Ingrese un numero mayor a 18"))
//    if (nro >= 18) {
//        repetir = false
//        console.log("Ingresaste el numero correctamente!", nro)
//    }
//}


class Bebidas {
    constructor(nombre, stock, precio) {
        this.nombre = nombre
        this.stock = stock
        this.precio = precio
        this.iva = 1.21
        this.precioConIva = function () {
            let pf = this.precio * this.iva
            return pf.toFixed(2)
        }
        //descontarStock(cant){
        //    this.stock -= cant
        //}
        
    }
}

const viaje1 = new Bebidas("Vodka saborizado", 15, 2100)
const viaje2 = new Bebidas("Vodka comun", 10, 1999)
const viaje3 = new Bebidas("Fernet", 5, 3000)



// let entrada = prompt("Ingresar un dato");

// while (entrada != "ESC") {
// alert ("El usuario ingreso "+ entrada);
// entrada = prompt ("Ingresar otro dato");
// }
