import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MarioDexPage } from './features/mario-dex-page/mario-dex-page';
import { ItemPersonaje } from "./features/item-personaje/item-personaje";
import { NuevoPersonaje } from "./features/nuevo-personaje/nuevo-personaje";

@Component({
  selector: 'app-root',
  imports: [ MarioDexPage, NuevoPersonaje],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('prueba_ut2');
  onInit() {
    console.log('App component initialized');
  }
}
