<?php
namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class SubChapter extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'chapter_id', 'learning_objectives', 'teaching_activities', 'past_paper_questions',
        'focus_question', 'evaluation'
    ];

    public function chapter()
    {
        return $this->belongsTo(Chapter::class, 'chapter_id');
    }

}