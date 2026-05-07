
export class Personaje {
  nombre: any;
  tipo: any;
  nivel: any;
  mundo: any;
  
  constructor(nombre: any, tipo: any, nivel: any, mundo: any) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.nivel = nivel;
    this.mundo = mundo;


}}

export interface PersonajeResponse{
nombre:string;
tipo:string;
nivel:string;
mundo?:string;

_id?:string;  
}

