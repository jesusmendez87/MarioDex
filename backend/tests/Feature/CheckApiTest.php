<?php

use App\Models\Personaje;
 

it('Devuelve lista de personajes', function () {
// comprueba endpoint /api/personajes
 
    Personaje::create([
        'nombre' => 'Mario',
        'tipo' => 'Heroe',
        'nivel' => 10
    ]);

    Personaje::create([
        'nombre' => 'Luigi',
        'tipo' => 'Heroe',
        'nivel' => 8
    ]);

    $response = $this->getJson('/api/personajes');
    $response->assertStatus(200);
    $response->assertJsonFragment([
        'nombre' => 'Mario'
    ]);

    $response->assertJsonFragment([
        'nombre' => 'Luigi'
    ]);
});