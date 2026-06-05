<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
//use Illuminate\Support\Str;

class Booking extends Model
{
    use HasFactory;
    protected $fillable=[
        'reference',
        'talent_id',
        'firstname',
        'lastname',
        'email',
        'phone',
        'talentalias',
        'budget',
        'venue',
        'location',
        'eventdate',
        'country',
        'socials',
        'comments',
        'bookingdate',
        'status',
        'fee',
    ];
    /*public static function boot(){
        parent::boot();
        static::created(function($booking){
            $prefix=strtoupper(Str::random(3));
            $booking->reference=$prefix.$booking->id.strtoupper(Str::random(6));
            $booking->save();
        });
    }*/
    public function talent(){
        return $this->belongsTo(Talent::class);
    }
}
