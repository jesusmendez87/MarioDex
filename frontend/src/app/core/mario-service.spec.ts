import { TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting, HttpClientTestingModule } from '@angular/common/http/testing';
import { MarioService } from './mario-service';
import { provideHttpClient } from '@angular/common/http';

describe('MarioService', () => {
  let service: MarioService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        MarioService,
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });

    service = TestBed.inject(MarioService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('verfica la creación del servicio', () => {  // Verifica la creación del servicio  
    expect(service).toBeTruthy();
  });

  it('debe listar personajes correctamente', () => {
    const personajesMock = [
      { nombre: 'Mario', tipo: 'Heroe', nivel: 10 },
      { nombre: 'Boo', tipo: 'Villano', nivel: 8 }
    ];

    service.getPersonajes().subscribe((data) => {
      expect(data.length).toBe(2);
      expect(data[0].nombre).toBe('Mario');
      expect(data[1].tipo).toBe('Villano');
    });

    const req = httpMock.expectOne((req) => req.url.includes('/api/personajes'));
    expect(req.request.method).toEqual('GET');
    req.flush(personajesMock);
  });

  it('verifica que se devuelvan los personajes esperados', () => {
    const mockResponse = [
      {
        id: 1,
        nombre: 'Mario',
        tipo: 'Heroe',
        nivel: '10',
      },
      {
        id: 2,
        nombre: 'Luigi',
        tipo: 'Heroe',
        nivel: '8',
      }
    ];

    service.getPersonajes().subscribe((response) => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne('https://mariodex.onrender.com/api/personajes');
    expect(req.request.method).toEqual('GET');
    req.flush(mockResponse);
  });

});