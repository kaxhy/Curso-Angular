'use strict'

console.log("HoLa MuNdO")

let x 
x = 23 
x = 'Pepe'
x = true;

console.log('x',x)

const y = 34
console.log('y',y)


const obj = {user: 'Pepe', edad: 34 }
const amigos = ['Juan','Rosa']

console.log(amigos[0]);

obj.edad = 35
// obj = 35 -> daria error al se declarado con const

amigos.push('Raul')

console.log('obj',obj)
console.log('amigos',amigos)

/* FUNCIONES */
// Decalrar
function algo(a = 0,b = 0){
    console.log('a',a)
    console.log('b',b)
}
// Asignar
const otra = function (a = 0,b = 0){
    console.log(a+b);
}
otra.propiedad = 'cosa rara'

otra(2)
console.log(otra)

// funciones arrow (Lamdbas)

const unaMas = () => {}
// const cuadrado = (a) => { return a*a }
// const cuadrado = (a) =>  return a*a
// const cuadrado = a => { return a*a }
// const cuadrado = a =>  return a*a 
const cuadrado = a => a*a
const verCuadrado = a => console.log(a*a)

console.log(cuadrado(5))

console.log(cuadrado) // Callback recivir fuincion por parametro

setTimeout(()=>console.log(cuadrado(5)) , 2000) 

setTimeout(verCuadrado , 2000) 

const data = [3, 6, 2, 9, 4, 6]

// const dataCuadrados = []

//ES6
/*
for( const item of data){
    dataCuadrados.push(item * item)
}
*/
// data.forEach( (item) => { dataCuadrados.push(item*item)} )
// data.forEach( item => dataCuadrados.push(item*item))

const dataCuadrados = data.map( item => item*item )
//Filtra los pares
const dataPares = dataCuadrados.filter( item => !(item%2))
//Filtra los impares
const dataImpares = dataCuadrados.filter( item => (item%2))

const sumaTotal = dataPares.reduce( (prev,curnt) => prev + curnt)

console.log(data, dataCuadrados, dataPares, dataImpares, sumaTotal)


//Ambitos en ES6
{
    let v1 = 34
}

// console.log(v1) -> Da error 


// ES6 'Template strings' comilla francesa al lado de la P

let name = 'Pepe'
const cadena = `Template 
    string : ${name}`
name = 'Maria'

console.log(cadena)
// ... Rest operatos ( lo transgorma todo a un array)
const media = (...aDatos) => { 
    return aDatos.reduce((a,b)=> a+b) / aDatos.length
 }

 console.log(media(2,4,6,7))

// Clonado de objetos

const obj1 = {user : 'Pepe', clave : 34}
const obj2 = obj1 // 2 referencia a al amisma instancia
const obj3 = Object.assign({},obj1) // nuevo objeto
const obj4 = {...obj1} // nuevo objeto
console.log(obj1,obj2,obj3,obj4)
obj2.clave = 0
console.log(obj1,obj2,obj3,obj4)
obj4.clave = 80
console.log(obj1,obj2,obj3,obj4)
obj3.clave = 10
console.log(obj1,obj2,obj3,obj4)

// Igual para los arrays

const numbers = [3, 6, 2, 9, 4, 6]
const clonNumbers = [... numbers]
clonNumbers.push(10);
console.log(numbers,clonNumbers)


const obj01 = {user : 'Pepe', clave : { id:23, dpto:34 }}
const obj02 = {...obj01}
obj02.clave.id = 0
console.log(obj01,obj02)
//Pierde  el segundo objeto por la profundidad
const obj03 = JSON.parse(JSON.stringify(obj01)) // Clonado de profundidad

// No usar lo anterior porque pierde el Date
let hoy = new Date()
console.log(hoy)
console.log(hoy.toDateString())


