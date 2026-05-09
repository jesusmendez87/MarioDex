
import { Component, Input} from '@angular/core';
 
@Component({
  selector: 'app-item-personaje',
  standalone:true,
  imports: [],
  templateUrl: './item-personaje.html',
  styleUrl: './item-personaje.css',
})
export class ItemPersonaje {
  // Propiedades
  @Input() nombre: string = '';
  @Input() tipo: string = '';
  @Input() nivel: string = '';
  @Input() mundo: string = '';

}
