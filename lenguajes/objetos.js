'use strict'

// Notacion literales o  JSON
const obj  = { nombre: 'Pepe' , edad: 23 }
// Lo que hace realmente es obj = new Object()

const datos = [4,6,8]
// Lo que hace realmente es  datos = new Array();

const exp = /1/ // Expresion regular
// Lo que hace realmente es  exp = new RegExp();

// Otros objetos en JS
const hoy = new Date()
const error = new  Error()

// No instanciables ( clases estaticas)

// JSON y Math

//Funiones constructoras 

function Persona(nombre, edad){
    this.nombre = nombre
    this.edad = edad
    this.saludar = function (){
        console.log(`Hola soy ${this.nombre}`)
    }
}



const p1 = new Persona('Luis',26)
const p2 = new Persona('Elena',29)
const p3 = new Persona('Rosa',32)
console.log(obj)

delete p2.edad
p2.color = 'amarillos'

console.log(p1,p2,p3)
p1.saludar()
//Asi no se repite en memoria 
Persona.prototype.adios = function (){
    console.log(`Adios ${this.nombre}`)
}


console.log(p1,p2,p3)

p1.adios()