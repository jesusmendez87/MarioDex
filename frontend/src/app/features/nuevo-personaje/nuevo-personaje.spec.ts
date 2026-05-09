import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevoPersonaje } from './nuevo-personaje';
import { MarioService } from './../../core/mario-service';
import { of } from 'rxjs';

describe('NuevoPersonaje', () => {
  let component: NuevoPersonaje;
  let fixture: ComponentFixture<NuevoPersonaje>;

  const marioServiceMock = {
    addPersonajes: jasmine
      .createSpy()
      .and.returnValue(of({ nombre: 'Mario', tipo: 'Heroe', nivel: '10' })),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuevoPersonaje],
      providers: [{ provide: MarioService, useValue: marioServiceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(NuevoPersonaje);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debe crear personaje correctamente', () => {
    //Preparar datos
    component.NuevoPersonaje = {
      nombre: 'Mario',
      tipo: 'Heroe',
      nivel: '10',
    };

    // Ejecutar método
    component.cargarPersonaje();

    // Verificar llamada al servicio
    expect(marioServiceMock.addPersonajes).toHaveBeenCalledWith({
      nombre: 'Mario',
      tipo: 'Heroe',
      nivel: '10',
    });
  });

  it('debe mostrar alerta si faltan campos', () => {
    spyOn(window, 'alert'); // espiar la funcion alert
    component.NuevoPersonaje = { //simulamos falta de nombre
      nombre: '',
      tipo: 'Heroe',
      nivel: '10',
    };
    component.cargarPersonaje();
    expect(window.alert).toHaveBeenCalledWith(
      'Debes completar el nombre, tipo, nivel y mundo del Personaje',
    );
  });
});
