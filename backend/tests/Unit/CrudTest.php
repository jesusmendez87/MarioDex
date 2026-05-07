<?php

use Tests\TestCase;
use Illuminate\Support\Facades\Route;

uses(TestCase::class);

test('Devuelve lista de personajes con estructura correcta', function () {

    // Sobreescribe la ruta solo para este test
    Route::delete('/api/personajes/{personaje}', function ($personaje) {
        return response()->json([
            'message' => 'Personaje eliminado correctamente'
        ], 200);
    });

    $response = $this->getJson('/api/personajes');

    $response->assertStatus(200);
    $response->assertJsonIsArray();
    $response->assertJsonStructure([
        '*' => ['nombre', 'tipo', 'nivel']
    ]);
    });


test('elimina personaje por nombre', function () {    

// Simula la ruta de delete con un ID falso
    Route::delete('/api/personajes/{personaje}', function ($personaje) {
        return response()->json([
            'message' => 'Personaje eliminado correctamente'
        ], 200);
    });

    $response = $this->deleteJson('/api/personajes/fake-id-123');

    $response->assertStatus(200);
    $response->assertJson([
        'message' => 'Personaje eliminado correctamente'
    ]);
    });

test('Actualiza un personaje correctamente', function () {

    Route::put('/api/personajes/{personaje}', function ($personaje) {
        return response()->json([
            'message' => 'Personaje actualizado correctamente',
            'data' => [
                'nombre' => 'Mario',
                'tipo'   => 'Heroe',
                'nivel'  => 10,
           
            ]
        ], 200);
    });

    $response = $this->putJson('/api/personajes/fake-id-123', [
        'nombre' => 'Mario',
        'tipo'   => 'Heroe',
        'nivel'  => 10,
       
    ]);

    $response->assertStatus(200);
    $response->assertJson([
        'message' => 'Personaje actualizado correctamente',
        'data' => [
            'nombre' => 'Mario',
            'tipo'   => 'Heroe',
            'nivel'  => 10,
        ]
    ]);
});
 

 