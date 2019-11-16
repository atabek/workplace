<?php
namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Chapter extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'subject_id', 'name', 'description', 'number'
    ];

    public function subject()
    {
        return $this->belongsTo(Subject::class, 'subject_id');
    }

}