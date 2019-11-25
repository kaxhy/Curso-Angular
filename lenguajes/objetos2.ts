import { ɵmakeDecorator } from "@angular/core";

//Siempre es public nunca puede ir private 
interface Animal {
    especie: string
}


//(decoradores) Añande metadatos a una clase de forma externa
//@decorator()
class Perro implements Animal {
    constructor(
        public especie:string
    ){}
    ladar(){
        console.log('gua');
    }
}

let bicho1 : Perro;
let bicho2 : Perro;
let bicho3 : Animal;
bicho1 = new Perro('Perro');
//Si tiene funtions no se puede: bicho2 = {especie: 'Perrito'};
bicho3 = {especie: 'Perrito'};

console.log(bicho1,bicho3);