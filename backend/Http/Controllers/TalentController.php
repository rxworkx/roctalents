<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\Talent;

class TalentController extends Controller
{
    public function showCategory($categorySlug){
        $category=Category::where('slug',$categorySlug)->firstOrFail();
        $talents=Talent::where('categories_id',$category->id)->get();
        return view('talent.category')->with([
            'category'=>$category,
            'talents'=>$talents,
        ]);
    }
    public function showTalent($slug){
        $talentName=ucwords(str_replace('-',' ',$slug));
        $talent=Talent::where('name',$talentName)->firstOrFail();
       $jsonFilePath=base_path('vendor/rinvex/countries/resources/data/countries.json');
        $countries=countries();
        //dd($countries);
        return view('talent.show',compact('talent','countries'));
    }
    
}
