<?php
namespace App\Services\Payment;
use App\Repositories\Payment\TransactionRepository;
//use Illuminate\Support\Facades\Auth;

class TransactionService
{
    private $transactionRepository = null;

    function __construct(TransactionRepository $transactionRepository){
        $this->transactionRepository = $transactionRepository;
    }


    function fetch($filters=[]){
        $query = $this->transactionRepository->query();
        return $query;
    }

    function fetchById($id){
        $record = $this->transactionRepository->fetchById($id);
        return $record;
    }


    function update($id,$data){
        $record = $this->transactionRepository->update($id,$data);
        return $record;
    }

    function create($data){
        $record = $this->transactionRepository->create($data);
        return $record;
    }

    function remove($id){
        $record = $this->transactionRepository->remove($id);
        return $record;
    }


}
