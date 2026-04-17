import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MarioDexPage } from './features/mario-dex-page/mario-dex-page';
import { ItemPersonaje } from "./features/item-personaje/item-personaje";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MarioDexPage, ItemPersonaje],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('prueba_ut2');
}
