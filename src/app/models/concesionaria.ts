
export interface concesionaria {
  email?: string;
    razonsocial?: string;
    telefono?: string;
    localidad?: string;
    clave?: string;
}
export class miConcesionaria implements concesionaria {
    constructor(public email?:string,public razonsocial?: string, public telefono?: string,
        public localidad?: string, public clave?: string){
    }
}

export interface vehiculo{
  marca?: string;
    modelo?: string;
    año?: string;
    kilometro?: string;
    tipo?: string;
}
