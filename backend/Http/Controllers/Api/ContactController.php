<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Models\Contact;

class ContactController extends Controller
{
    public function store(Request $request){
        //validate the form input
        $validated=$request->validate([
            'firstName'=>'required|string|max:255',
            'lastName'=>'required|string|max:255',
            'email' => 'required|email|max:255',
            'organization' => 'required|string|max:255',
            'country' => 'required|string|max:255',
            'message' => 'required|string',
        ]);

        Contact::create([
            'firstname'=>$validated['firstName'],
            'lastname'=>$validated['lastName'],
            'email'=>$validated['email'],
            'organization'=>$validated['organization'],
            'country'=>$validated['country'],
            'message'=>$validated['message'],
        ]);
        // Handle the contact logic, e.g., send an email
       /* Mail::send([], [], function ($message) use ($validated) {
            $message->to('your-email@example.com')
                ->subject('New Contact Message')
                ->setBody('<h1>Contact Message</h1><p>First Name: ' . $validated['firstName'] . '</p><p>Last Name: ' . $validated['lastName'] . '</p><p>Email: ' . $validated['email'] . '</p><p>Organization: ' . $validated['organization'] . '</p><p>Country: ' . $validated['country'] . '</p><p>Message: ' . $validated['message'] . '</p>', 'text/html');
        });*/
         // Return JSON response
         return response()->json(['message' => 'Message sent successfully!'], 200);
    }



}
