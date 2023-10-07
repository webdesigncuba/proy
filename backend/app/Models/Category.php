<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Category extends Model
{
    use HasFactory;
    
    // Adicionado para poder excluir os dados da tabela de categorias, pois existe um relacionamento com a tabela de Produtos
    use SoftDeletes;

    protected $table = "category";

    protected $fillable = [
        'name',
      ];
    
}