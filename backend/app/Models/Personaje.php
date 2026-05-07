<?php

namespace App\Models;

use MongoDB\Laravel\Eloquent\Model as Eloquent;

class Personaje extends Eloquent
{
    protected $connection = 'mongodb';

    protected $fillable = [
        'nombre',
        'tipo',
        'nivel',
        'mundo',
    ];
}
