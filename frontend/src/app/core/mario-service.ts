import { Personaje, PersonajeResponse } from './../models/personaje';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MarioService {


  constructor(private http: HttpClient) {}

  getPersonajes(): Observable<any> {
    return this.http.get('http://mariodex.test/api/personajes');
  }

  addPersonajes(Personaje: PersonajeResponse): Observable<PersonajeResponse> {
    return this.http.post<PersonajeResponse>('http://mariodex.test/api/personajes', Personaje);
  }



}
