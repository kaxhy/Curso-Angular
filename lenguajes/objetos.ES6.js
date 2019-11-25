class Persona {

    constructor(nombre, edad,){
        this.nombre = nombre
        this.edad = edad
    }

    saludar(){
        console.log(`Hola soy ${this.nombre }`)
    }

}

const p1 = new Persona('Pepe',25)
const p2 = new Persona('Elena',32)

delete p2.edad
p2.color = 'amarillos'

console.log(p1,p2)
p1.saludar
p2.saludar