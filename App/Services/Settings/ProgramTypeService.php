<?php
namespace App\Services\Settings;
use App\Repositories\Settings\ProgramTypeRepository;
//use Illuminate\Support\Facades\Auth;

class ProgramTypeService
{
    private $programTypeRepository = null;

    function __construct(ProgramTypeRepository $programTypeRepository){
        $this->programTypeRepository = $programTypeRepository;
    }


    function fetch($filters=[]){
        $query = $this->programTypeRepository->query();
        return $query;
    }

    function fetchById($id){
        $record = $this->programTypeRepository->fetchById($id);
        return $record;
    }


    function update($id,$data){
        $record = $this->programTypeRepository->update($id,$data);
        return $record;
    }

    function create($data){
        $record = $this->programTypeRepository->create($data);
        return $record;
    }

    function remove($id){
        $record = $this->programTypeRepository->remove($id);
        return $record;
    }


}
