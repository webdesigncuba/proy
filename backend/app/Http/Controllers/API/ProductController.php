<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    // https://carbon.now.sh/
    public function getAll(){
        $data = Product::get();
        return response()->json($data, 200);
      }
  
      public function create(Request $request){
        $data['name'] = $request['name'];
        $data['category_id'] = $request['category_id'];
        $data['valor'] = $request['valor'];
        $data['venc'] = $request['venc'];
        $data['quant'] = $request['quant'];
        $data['perc'] = $request['perc'];
        Product::create($data);
        return response()->json([
            'message' => "Successfully created",
            'success' => true
        ], 200);
      }
  
      public function delete($id){
        $res = Product::find($id)->delete();
        return response()->json([
            'message' => "Successfully deleted",
            'success' => true
        ], 200);
      }
  
      public function get($id){
        $data = Product::find($id);
        return response()->json($data, 200);
      }
  
      public function update(Request $request,$id){
        $data['name'] = $request['name'];
        $data['category_id'] = $request['category_id'];
        $data['valor'] = $request['valor'];
        $data['venc'] = $request['venc'];
        $data['quant'] = $request['quant'];
        $data['perc'] = $request['perc'];
        Product::find($id)->update($data);
        return response()->json([
            'message' => "Successfully updated",
            'success' => true
        ], 200);
      }
}