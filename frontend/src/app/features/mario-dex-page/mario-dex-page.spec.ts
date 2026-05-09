import { MarioDexPage } from './mario-dex-page';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('mario-dex-page',()=>{
let component:MarioDexPage;
let fixture:ComponentFixture<MarioDexPage>;
let verPersonajesMock : any;

beforeEach(async()=>{ 
  // Configuración de las pruebas
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarioDexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


   it('debería listar personajes', () => {
    verPersonajesMock = {
        addpersonaje: jasmine.createSpy().and.returnValue(of([`Mario`,`Heroe`,10],[`Luigi`,`Heroe`,9]))
    }

    const MarioService=TestBed.createComponent(MarioDexPage);
    const component = MarioService.componentInstance;

    MarioService.detectChanges();
    expect(component).toBeTruthy();

});







});