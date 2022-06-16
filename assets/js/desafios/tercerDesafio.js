// La idea es hacer un sistema para cargar el stock de la tienda.

let bebida;
let cantidadEnAlmacen;
let precioBebida;

class Bebidas {
    constructor(nombre, cantidad, precio) {
        this.nombre = bebida;
        this.stock = cantidadEnAlmacen;
        this.precio = precioBebida;
    }
    sumarIva (){
        this.precio = this.precio * 1.21;
    }
}

const stock = [];

function sumarStock(){
    stock.push (new Bebidas(bebida = prompt("Ingrese una bebida"),cantidadEnAlmacen = +(prompt("Ingrese la cantidad de botellas sumadas al stock")), precioBebida = +(prompt("Ingrese el precio de la bebida"))  ))
}

let cantidadIngresos;

do{
   cantidadIngresos = +(prompt("Ingrese la cantidad de productos a sumar"));
} while (isNaN(cantidadIngresos));
for (let i = 0; i < cantidadIngresos; i++){
        sumarStock ();
};


function listarProductos() {
    console.clear()
    console.table(stock)
}

function consultarStock(){
    alert("Actualmente, disponemos de un total de " + stock.lengt + " productos en stock ") // Me devuelve undefined, no entiendo bien por que.
}
