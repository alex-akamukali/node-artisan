<?php
namespace App\Repositories\Payment;
use App\Models\Payment\Transaction;
//use Illuminate\Support\Facades\Auth;

class TransactionRepository
{


    function query(){
        $query = Transaction::query();
        return $query;
    }

    function fetchById($id){
        $record = Transaction::query()->find($id);
        return $record;
    }


    function update($id,$data){
        $record = Transaction::query()->find($id);
        $record->update($data);
        return $record;
    }

    function create($data){
        $record = Transaction::create($data);
        return $record;
    }

    function remove($id){
        $record = Transaction::query()->find($id);
        $record->delete();
        return $record;
    }


}
