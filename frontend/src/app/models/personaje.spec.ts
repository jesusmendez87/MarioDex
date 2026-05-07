import { Personaje } from './personaje'; 
 


describe('Personaje', () => {

  it('debe modelar personaje correctamente', () => {
    const $nombre = 'Mario';
    const $tipo = 'Heroe';
    const $nivel = '10';
    const $mundo = 'Mundo'
 
    expect(new Personaje($nombre, $tipo, $nivel,$mundo)).toBeTruthy();
  });

  it('verifica que tenga las propiedades correctas', () => {
    const $nombre = 'Luigi';
    const $tipo = 'Aliado';
    const $nivel = '20';
    const $mundo = 'Mundo'
 
    const personaje = new Personaje($nombre, $tipo, $nivel, $mundo);
    expect(personaje.nombre).toBe($nombre);
    expect(personaje.tipo).toBe($tipo);
    expect(personaje.nivel).toBe($nivel);
    expect(personaje.mundo).toBe($mundo);
  });
});
