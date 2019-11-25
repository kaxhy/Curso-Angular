'use strict'

/* Asi no cogemos la bariable
console.log('1')
let x = setTimeout(()=> {    
    console.log('2')
    return 1
},0)
console.log('3')
setTimeout(()=> {console.log('4',x)}, 2000)
console.log('5')
console.log('6')
*/

/* Asincronia y callback's
function algoAsin(callback){
    setTimeout(() => {
        let x = 23
        callback(x)
    },2000)
}

algoAsin((x) => console.log(x))
*/

//Promesas (Ejemplo Pedir hamburgesa ( tikect --> si comemos, no -> enfado))

function algoAsinc(){
    return new Promise((resolve,reject) =>{
        let n = Math.random()
        setTimeout(() => {
            if( n > 0.5 ) {
                // ok
                resolve(n)
            }else{
                // error 
                reject(new Error(n))
            }
        },2000)
    })
}
// y ahora ...
/*
algoAsinc()
.then ( (response) => {console.log(response) })
.catch( (error) => { console.error(error)})
*/

//Consumiendo la promesa ES6
/*
algoAsinc()
.then ( response => console.log('Todo bien ' +response))
.catch( error => console.error('error ' + error.message))
*/

/*
function main (){

}

main()
 
ES IGUAL

(()=>{})()

*/

//ES2017 async await
let x = 21;
// Unica ocacison que es obligatorio ; al final.
function pintar(sms) {
    console.log('Todo bien ' + sms)
}

(async()=>{
    try {
        let response = await algoAsinc()
        pintar(response)     
    } catch (error) {
        console.error('error ' + error.message)
    }    
})()
