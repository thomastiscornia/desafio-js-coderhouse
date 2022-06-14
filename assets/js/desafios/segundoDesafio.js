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

const bebida1 = new Bebidas("Vodka saborizado", 15, 2100)
const bebida2 = new Bebidas("Vodka comun", 10, 1999)
const bebida3 = new Bebidas("Fernet", 5, 3000)