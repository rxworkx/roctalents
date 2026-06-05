<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\Talent;
class Category extends Model
{
    use HasFactory;
    protected $fillable=[
        'name',
        'slug',
        'desc',
        'image',
        'rank',
    ];
    public function talents(){
        return $this->hasMany(Talent::class);
    }
    
}
