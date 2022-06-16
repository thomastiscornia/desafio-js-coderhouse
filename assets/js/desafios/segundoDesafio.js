const iva = 1.21
let stockAretirar = +(prompt("Ingrese el stock a restar"))

class Bebidas {
    constructor(nombre, stock, precio) {
        this.nombre = nombre
        this.stock = stock
        this.precio = precio
    }
    sumarIva (){
        this.precio = this.precio * iva;
    }
    restarStock(){
        this.stock = this.stock - stockAretirar;
    }
}

const bebida1 = new Bebidas("Vodka saborizado", 15, 2100)
const bebida2 = new Bebidas("Vodka comun", 10, 1999)
const bebida3 = new Bebidas("Fernet", 5, 3000)

bebida1.sumarIva();