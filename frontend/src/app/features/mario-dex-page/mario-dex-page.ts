
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonajeResponse } from '../../models/personaje';
import { MarioService } from '../../core/mario-service';
import { ItemPersonaje } from "../item-personaje/item-personaje";
import { NuevoPersonaje } from "../nuevo-personaje/nuevo-personaje";
 

@Component({
  selector: 'app-mario-dex-page',
  standalone:true,
  imports: [CommonModule, ItemPersonaje, NuevoPersonaje],
  templateUrl: './mario-dex-page.html',
  styleUrl: './mario-dex-page.css',
})
export class MarioDexPage implements OnInit {


  personajes: PersonajeResponse[] =[];
    delete: string = '';
  modalAbierto = false;


  constructor(private PersonajeService: MarioService, private cdr: ChangeDetectorRef){
  }

  ngOnInit() {
    this.loadpersonajes();
  }


  loadpersonajes(){
    this.PersonajeService.getPersonajes().subscribe({
      next: (data: PersonajeResponse[]) => {
        this.personajes = [...data]; // Crear nueva referencia del array
        console.log('Personajes cargados:', this.personajes);
        this.cdr.detectChanges(); // Forzar detección de cambios
      },
      error: (error) => {
        console.error('Error cargando personajes:', error);
      }
    });
  }

     abrirModal() {
    this.modalAbierto = true;
  }

  cerrarModal() {
    this.modalAbierto = false;
    window.location.reload();
  }

  trackByPersonaje(index: number, item: PersonajeResponse): string {
    return item._id || item.nombre;
  }


}
