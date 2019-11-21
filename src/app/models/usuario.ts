
export interface Usuario {
    email?: string;
    clave?: string;
}
export class miUsuario implements Usuario {
    constructor( public email?: string, public clave?: string){

    }
}
