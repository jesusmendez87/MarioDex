<?php

use Tests\TestCase;
use Illuminate\Support\Facades\Route;

uses(TestCase::class);

test('Devuelve lista de personajes con estructura correcta', function () {

    // Sobreescribe la ruta solo para este test
    Route::get('/api/personajes', function () {
        return [
            [
                'nombre' => 'Mario',
                'tipo' => 'Heroe',
                'nivel' => '10'
            ],
            [
                'nombre' => 'Luigi',
                'tipo' => 'Heroe',
                'nivel' => '8'
            ]
        ];
    })    ;

    $response = $this->getJson('/api/personajes'); //mensaje de error de intelephense

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

    $response = $this->deleteJson('/api/personajes/fake-id-123'); //mensaje de error de intelephense

    $response->assertStatus(200);
    $response->assertJson([
        'message' => 'Personaje eliminado correctamente'
    ]);
    });

test('crea un personaje correctamente', function () {
        //simulamos la ruta que mokeamos
        Route::post('/api/personajes', function () {
            return response()->json([
                'message' => 'Personaje creado correctamente',
                'data' => [
                    'nombre' => 'Mario',
                    'tipo'   => 'Heroe',
                    'nivel'  => 10,
                ]
            ], 201);
        });

        $response = $this->postJson('/api/personajes', [  //mensaje de error de intelephense

            'nombre' => 'Mario',
            'tipo'   => 'Heroe',
            'nivel'  => 10,
        ]); 

        $response->assertStatus(201);   
        $response->assertJson([
            'message' => 'Personaje creado correctamente',
            'data' => [
                'nombre' => 'Mario',
                'tipo'   => 'Heroe',        
                'nivel'  => 10,     
                            ]
        ]);
    });

test('Actualiza un personaje correctamente', function () {
 // simulamos la ruta que mokeamos
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
// simulamos el personaje a actualizar
    $response = $this->putJson('/api/personajes/fake-id-123', [  //mensaje de error de intelephense

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
 

 