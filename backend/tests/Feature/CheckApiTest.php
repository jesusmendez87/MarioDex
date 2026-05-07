<?php

use App\Models\Personaje;
use Illuminate\Support\Facades\DB;

it('Devuelve lista de personajes con estructura correcta', function () {

    DB::shouldReceive('connection')->andReturnSelf();
    DB::shouldReceive('select')->andReturn([
        (object)['nombre' => 'Mario', 'tipo' => 'Humano', 'nivel' => 10],
        (object)['nombre' => 'Luigi', 'tipo' => 'Humano', 'nivel' => 8],
    ]);

    $response = $this->getJson('/api/personajes');

    $response->assertStatus(200);
    $response->assertJsonStructure([
        '*' => ['nombre', 'tipo', 'nivel']
    ]);
});