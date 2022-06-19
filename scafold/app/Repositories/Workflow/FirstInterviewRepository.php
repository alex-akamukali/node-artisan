<?php
namespace App\Repositories\Workflow;
use App\Models\Workflow\FirstInterview;
//use Illuminate\Support\Facades\Auth;

class FirstInterviewRepository
{


    function query(){
        $query = FirstInterview::query();
        return $query;
    }

    function fetchById($id){
        $record = FirstInterview::query()->find($id);
        return $record;
    }


    function update($id,$data){
        $record = FirstInterview::query()->find($id);
        $record->update($data);
        return $record;
    }

    function create($data){
        $record = FirstInterview::create($data);
        return $record;
    }

    function remove($id){
        $record = FirstInterview::query()->find($id);
        $record->delete();
        return $record;
    }


}
