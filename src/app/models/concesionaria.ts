
export interface Concesionaria {
    email?: string;
    razonsocial?: string;
    telefono?: string;
    localidad?: string;
    clave?: string;
}
export class miConcesionaria implements Concesionaria {
    constructor(public email?:string,public razonsocial?: string, public telefono?: string,
        public localidad?: string, public clave?: string){
    }
}

export interface Vehiculo{
    marca?: string;
    modelo?: string;
    year?: string;
    kilometros?: string;
    tipo?: string;
    foto?: string;
    concesionaria?: string;
}
export class miVehiculo implements Vehiculo {
    constructor(public marca?:string, public modelo?: string,
        public year?: string,
        public kilometros?: string,
        public tipo?: string,
        public foto?: string,
        public concesionaria?: string ){
    }
}
