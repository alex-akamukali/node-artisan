<?php
namespace App\Repositories\Repo1;
use App\Models\Model1\Model\Entity;
//use Illuminate\Support\Facades\Auth;

class RepoDomainRepository
{


    function query(){
        $query = Entity::query();
        return $query;
    }

    function fetchById($id){
        $record = Entity::query()->find($id);
        return $record;
    }


    function update($id,$data){
        $record = Entity::query()->find($id);
        $record->update($data);
        return $record;
    }

    function create($data){
        $record = Entity::create($data);
        return $record;
    }

    function remove($id){
        $record = Entity::query()->find($id);
        $record->delete();
        return $record;
    }


}
