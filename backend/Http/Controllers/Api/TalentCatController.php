<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Category;

class TalentCatController extends Controller{
    public function index(){
        $items=Category::all();
        return response()->json($items);
    }
}