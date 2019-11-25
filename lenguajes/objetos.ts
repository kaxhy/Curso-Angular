class Persona {
 /*   private nombre: string;
    public edad: number;

    constructor(nombre: string, edad: number){
        this.nombre = nombre;
        this.edad = edad;
    }
 De forma mas simple */
    constructor(
        public nombre: string,
        public edad: number
    ){ }

    saludar(): void{
        console.log(`Hola soy ${this.nombre }`);
    }

}

const p1 = new Persona('Pepe',25)
const p2 = new Persona('Elena',32)

delete p2.edad
// p2.color = 'amarillos'

console.log(p1,p2)
p1.saludar()
p2.saludar()

class Alumno extends Persona {
    curso: string
    constructor(nombre, edad, curso){
        super (nombre, edad)
        this.curso = curso
    }
    saludar():void{
        super.saludar()
        console.log(`del curso ${this.curso }`)
    }
}
const a1 = new Alumno('Ernesto',32, 'Angular');
a1.saludar();



