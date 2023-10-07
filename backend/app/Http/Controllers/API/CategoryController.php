<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function getAll(){
        $data = Category::get();
        return response()->json($data, 200);
      }
    
      public function create(Request $request){
        $data['name'] = $request['name'];
        Category::create($data);
        return response()->json([
            'message' => "Successfully created",
            'success' => true
        ], 200);
      }
  
      public function delete($id){
        $res = Category::find($id)->delete();
        return response()->json([
            'message' => "Successfully deleted",
            'success' => true
        ], 200);
      }
  
      public function get($id){
        $data = Category::find($id);
        return response()->json($data, 200);
      }
  
      public function update(Request $request,$id){
        $data['name'] = $request['name'];
        Category::find($id)->update($data);
        return response()->json([
            'message' => "Successfully updated",
            'success' => true
        ], 200);
      }
}