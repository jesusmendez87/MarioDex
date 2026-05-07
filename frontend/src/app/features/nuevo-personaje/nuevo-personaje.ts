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
  @Output() personajeGuardado = new EventEmitter<void>();
  @Output() cerrar = new EventEmitter<void>();

  constructor(private personajeResponse : MarioService) {
 

  }

cargarPersonaje() {

  if (!this.NuevoPersonaje.nombre || !this.NuevoPersonaje.tipo || !this.NuevoPersonaje.nivel ) {
    alert('Debes completar el nombre, tipo, nivel y mundo del Personaje');
    return;
  }

  this.personajeResponse.addPersonajes(this.NuevoPersonaje).subscribe({
    next: res => {
      console.log('Personaje agregado', res);
      this.NuevoPersonaje = { nombre: '', tipo: '', nivel: '' }; // Reiniciar el formulario

      alert('Personaje agregado con éxito');
      this.personajeGuardado.emit();
      this.cerrar.emit();
    },
    error: err => {
      console.error('Error al agregar personaje', err);
    }
  });
}

}
