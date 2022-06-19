<?php
namespace App\Services\Workflow;
use App\Repositories\Workflow\FirstInterviewRepository;
//use Illuminate\Support\Facades\Auth;

class FirstInterviewService
{
    private $firstInterviewRepository = null;

    function __construct(FirstInterviewRepository $firstInterviewRepository){
        $this->firstInterviewRepository = $firstInterviewRepository;
    }


    function fetch($filters=[]){
        $query = $this->firstInterviewRepository->query();
        return $query;
    }

    function fetchById($id){
        $record = $this->firstInterviewRepository->fetchById($id);
        return $record;
    }


    function update($id,$data){
        $record = $this->firstInterviewRepository->update($id,$data);
        return $record;
    }

    function create($data){
        $record = $this->firstInterviewRepository->create($data);
        return $record;
    }

    function remove($id){
        $record = $this->firstInterviewRepository->remove($id);
        return $record;
    }


}
