
export class Personaje {
  nombre: any;
  tipo: any;
  nivel: any;
  
    constructor(
    nombre: string,
    tipo: string,
    nivel: string
  ) {};


}


export interface PersonajeResponse{
nombre:string;
tipo:string;
nivel?:string;
urlImagen?:string;

_id?:string;
}

