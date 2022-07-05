<?php
namespace App\Repositories\Settings;
use App\Models\Settings\ProgramType;
//use Illuminate\Support\Facades\Auth;

class ProgramTypeRepository
{


    function query(){
        $query = ProgramType::query();
        return $query;
    }

    function fetchById($id){
        $record = ProgramType::query()->find($id);
        return $record;
    }


    function update($id,$data){
        $record = ProgramType::query()->find($id);
        $record->update($data);
        return $record;
    }

    function create($data){
        $record = ProgramType::create($data);
        return $record;
    }

    function remove($id){
        $record = ProgramType::query()->find($id);
        $record->delete();
        return $record;
    }


}
