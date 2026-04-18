
import { Component, Input} from '@angular/core';
 
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
