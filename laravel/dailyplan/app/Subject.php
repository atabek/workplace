<?php
namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Subject extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'user_id', 'name', 'code', 'description', 'number_of_chapters' 
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}