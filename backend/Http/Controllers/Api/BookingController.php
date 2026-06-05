<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Models\Booking;


class BookingController extends Controller
{
    public function store(Request $request){
        //validate the form input
        $validatedData=$request->validate([
            'firstname'=>'required|string|max:255',
            'lastname'=>'required|string|max:255',
            'email'=>'required|email',
            'phone'=>'nullable|string|regex:/^\+?[0-9]{5,15}$/|max:16',
            'talentalias' => 'nullable|string',
            'budget' => 'nullable|string',
            'venue' => 'nullable|string',
            'location' => 'nullable|string',
            'eventdate' => 'nullable|date',
            'country' => 'nullable|string',
            'socials' => 'nullable|string',
            'comments' => 'nullable|string',
        ]);
        $validatedData['bookingdate']=date('Y-m-d');
        $reference=$this->generateUniqueReference();
        $validatedData['reference']=$reference;
        Booking::create($validatedData); 
        /*return response()->json([
            'message'=>'Booking created successfully!',    
        ],201);*/
        return redirect()->back()->with('responseMessage','Booking created successfully')->withFragment('bookForm');
        //session()->flash('debug_success', 'Debug message');
      
    }
    private function generateUniqueReference(){
        do{
            $reference=strtoupper(Str::random(3)).str_pad(mt_rand(0, 999), 3, '0', STR_PAD_LEFT).strtoupper(Str::random(3));
        }while(Booking::where('reference',$reference)->exists());
        return $reference;
    }
    
    
}
?>