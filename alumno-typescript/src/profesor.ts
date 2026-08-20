import { persona } from "./persona";

export class profesor extends persona {
    constructor(
        public nombre: string,
        public legajo: number
    ) {
        super(nombre, legajo);
    }
}


 

