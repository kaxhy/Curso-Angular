export class TareaModel {
    constructor(
        public nombre: string = '',
        public isCompleted: boolean = false,
    ) {}
}

/* Otra forma seria
export interface TareaIf {
    nombre: string;
    isCompleted: boolean;
} */
