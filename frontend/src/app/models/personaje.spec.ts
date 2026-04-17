import { Personaje } from './personaje';
 


describe('Personaje', () => {

  it('should create an instance', () => {
    const $nombre = 'Mario';
    const $tipo = 'electric';
    const $nivel = '10';
    expect(new Personaje($nombre, $tipo, $nivel)).toBeTruthy();
  });

  it('should have the correct properties', () => {
    const $nombre = 'Luigi';
    const $tipo = 'fire';
    const $nivel = '20';
    const personaje = new Personaje($nombre, $tipo, $nivel);
    expect(personaje.nombre).toBe($nombre);
    expect(personaje.tipo).toBe($tipo);
    expect(personaje.nivel).toBe($nivel);
  });
});
