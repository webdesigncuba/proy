<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
  
   // Consulta de todas as categorias
    public function getAll(){
        $data = Category::get();
        return response()->json($data, 200);
      }
      
   // Adicionar novas categorias 
      public function create(Request $request){
        $data['name'] = $request['name'];
        Category::create($data);
        return response()->json([
            'message' => "Successfully created",
            'success' => true
        ], 200);
      }
      
    // Excluir Categorias
      public function delete($id){
        $res = Category::find($id)->delete();
        return response()->json([
            'message' => "Successfully deleted",
            'success' => true
        ], 200);
      }
    
    // Procurar Categorias  
      public function get($id){
        $data = Category::find($id);
        return response()->json($data, 200);
      }
  
    // Atualizar Categorias  
      public function update(Request $request,$id){
        $data['name'] = $request['name'];
        Category::find($id)->update($data);
        return response()->json([
            'message' => "Successfully updated",
            'success' => true
        ], 200);
      }
}