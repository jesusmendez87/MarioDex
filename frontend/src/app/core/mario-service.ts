import { Personaje, PersonajeResponse } from './../models/personaje';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root',
})
export class MarioService {

   private apiUrl = environment.apiUrl + '/api/';

  constructor(private http: HttpClient) {}

  getPersonajes(): Observable<any> {
    return this.http.get(this.apiUrl + 'personajes');
  }

  addPersonajes(Personaje: PersonajeResponse): Observable<PersonajeResponse> {
    return this.http.post<PersonajeResponse>(this.apiUrl + 'personajes', Personaje);
  }



}
