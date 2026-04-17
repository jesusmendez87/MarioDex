import { MarioService } from './../../core/mario-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PersonajeResponse } from './../../models/personaje';
import { Component, Input, Output, EventEmitter } from '@angular/core';
 
@Component({
  selector: 'app-nuevo-personaje',
  standalone:true,
  imports: [CommonModule, FormsModule],
  templateUrl: './nuevo-personaje.html',
  styleUrl: './nuevo-personaje.css', 
})
export class NuevoPersonaje {
 // Decoradores Input para recibir datos del componente padre
  NuevoPersonaje: PersonajeResponse = {nombre: '', tipo: '', nivel: ''};
  @Output() pokemonGuardado = new EventEmitter<void>();
  @Output() cerrar = new EventEmitter<void>();

  constructor(private personajeResponse : MarioService) {
 

  }

cargarPersonaje() {

  if (!this.NuevoPersonaje.nombre || !this.NuevoPersonaje.tipo) {
    alert('Debes completar el nombre y tipo del Pokémon');
    return;
  }

  this.personajeResponse.addPersonajes(this.NuevoPersonaje).subscribe({
    next: res => {
      console.log('Pokemon agregado', res);
      this.NuevoPersonaje = { nombre: '', tipo: '', nivel: '' };

      alert('Pokémon agregado con éxito');
      this.pokemonGuardado.emit();
      this.cerrar.emit();
    },
    error: err => {
      console.error('Error al agregar Pokémon', err);
    }
  });
}

}
