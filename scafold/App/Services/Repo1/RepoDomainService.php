<?php
namespace App\Services\Repo1;
use App\Repositories\Repo1\RepoDomainRepository;
//use Illuminate\Support\Facades\Auth;

class RepoDomainService
{
    private $repoDomainRepository = null;

    function __construct(RepoDomainRepository $repoDomainRepository){
        $this->repoDomainRepository = $repoDomainRepository;
    }


    function fetch($filters=[]){
        $query = $this->repoDomainRepository->query();
        return $query;
    }

    function fetchById($id){
        $record = $this->repoDomainRepository->fetchById($id);
        return $record;
    }


    function update($id,$data){
        $record = $this->repoDomainRepository->update($id,$data);
        return $record;
    }

    function create($data){
        $record = $this->repoDomainRepository->create($data);
        return $record;
    }

    function remove($id){
        $record = $this->repoDomainRepository->remove($id);
        return $record;
    }


}
