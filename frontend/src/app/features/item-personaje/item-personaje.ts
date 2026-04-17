
import { Component, Input, Output, EventEmitter } from '@angular/core';
 import { MarioDexPage } from '../mario-dex-page/mario-dex-page';
import { NuevoPersonaje } from '../nuevo-personaje/nuevo-personaje';
@Component({
  selector: 'app-item-personaje',
  standalone:true,
  imports: [],
  templateUrl: './item-personaje.html',
  styleUrl: './item-personaje.css',
})
export class ItemPersonaje {

   @Input() nombre: string = '';
  @Input() tipo: string = '';
  @Input() urlImagen: string = '';
  @Input() nivel: string = '';



}
