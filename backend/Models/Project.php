<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;
    protected $fillable=[
        'talent_id',
        'title',
        'type',
        'desc',
        'startdate',
        'enddate',
        'venue',
        'location',
        'budget',
        'image'
    ];
    public function talent(){
        return $this->belongsTo(Talent::class);
    }
}
