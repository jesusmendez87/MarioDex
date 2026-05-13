<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Personaje;


class PersonajeController extends Controller
{
 public function index()
    {
        return Personaje::all();
        
    }


public function store(Request $request)
{
    $validated = $request->validate([
        'nombre' => 'required|string|max:255',
        'tipo' => 'required|string|max:255',
        'nivel' => 'required|integer|min:1|max:100',
        'mundo' => 'string|max:255',
    ]);

    $personaje = Personaje::create($validated);

    return response()->json([
        'message' => 'Personaje creado correctamente',
        'data' => $personaje
    ], 201);
}

public function show(Personaje $personaje)
{
    return $personaje;
}

public function update(Request $request, Personaje $personaje)
{
    $validated = $request->validate([
        'nombre' => 'sometimes|required|string|max:255',
        'tipo' => 'sometimes|required|string|max:255',
        'nivel' => 'sometimes|required|integer|min:1|max:100',
        'mundo' => 'sometimes|required|string|max:255',
    ]);

    $personaje->update($validated);

    return response()->json([
        'message' => 'Personaje actualizado correctamente',
        'data' => $personaje
    ], 200);
}

public function destroy(Personaje $personaje)
{
    $personaje->delete('nombre');

    return response()->json([
        'message' => 'Personaje eliminado correctamente'
    ], 200);
}


}
