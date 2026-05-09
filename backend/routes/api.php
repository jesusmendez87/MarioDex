<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PersonajeController;
use App\Models\Personaje;

/*****************************************************
 *                                                   *
 *              Rutas API de la aplicación            *
 *                                                   *
 *****************************************************/

//Rutas de Personajes
Route::apiResource('personajes', App\Http\Controllers\PersonajeController::class);
 
 
 