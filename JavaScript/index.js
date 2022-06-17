class CarritoDecompras{
    constructor(){
        this.productos = []
        this.name = ''
        this.total = 0
    }
    setName(value){
        this.name = value
    }
    addProduct(product){
        this.productos.push(product)
        console.log(product)
    }
    removeLastProduct(){
        this.product.pop()
    }
    removeFirstProduct(){
        this.productos.shift()
    }
    getTotal(){
        for (const producto of this.productos){
            this.total = this.total + producto.price
        }
        console.log(this.total)        
    }   
}

class Product{
    constructor(name, price){
        this.name = name
        this.price = price
    }
}
const cliente = new CarritoDecompras()
cliente.setName('Marina Olivieri')

const p1 = new Product('Shampoo Kerastase Discipline (250ml)', 1630)
const p2 = new Product('Mascara Kerastase Nutritive (200ml)', 2300)
const p3 = new Product('Serum nocturno Kerastase (90ml)', 2740)
const p4 = new Product('Elexir Uktimate Kerastase (100ml)', 2190)
const p5 = new Product('Protector termico Kerastase (150ml)', 2010)
const p6 = new Product('Acondicionador Redken Frizz Dismiss (250ml)', 1350)

cliente.addProduct(p1)
cliente.addProduct(p2)
cliente.addProduct(p3)
cliente.addProduct(p4)
cliente.addProduct(p5)
cliente.addProduct(p6)
cliente.getTotal()