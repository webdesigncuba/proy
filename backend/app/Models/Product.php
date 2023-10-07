<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $table = "product";

    protected $fillable = [
      'name',
      'category_id',
      'valor',
      'venc',
      'quant',
      'perc',
    ];
    use HasFactory;
}