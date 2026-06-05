<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Talent extends Model
{
    use HasFactory;
    protected $fillable=[
        'categories_id',
        'name',
        'firstname',
        'lastname',
        'gender',
        'dob',
        'email',
        'phone',
        'bio',
        'image',
        'availability',
        'telegram',
        'twitter',
        'instagram',
        'youtube',
        'soundcloud',
        'facebook',
        'whatsapp',
    ];
    public function category(){
        return $this->belongsTo(Category::class);
    }
    
    public function bookings(){
        return $this->hasMany(Booking::class);
    }
    public function projects(){
        return $this->hasMany(Project::class);
    }

    //just for the admin 
    public function categories(){
        return $this->belongsTo(Category::class);
    }
}
