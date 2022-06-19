<?php
namespace App\Repositories\Finance;
use App\Models\Finance\Payment;
//use Illuminate\Support\Facades\Auth;

class PaymentRepository
{


    function query(){
        $query = Payment::query();
        return $query;
    }

    function fetchById($id){
        $record = Payment::query()->find($id);
        return $record;
    }


    function update($id,$data){
        $record = Payment::query()->find($id);
        $record->update($data);
        return $record;
    }

    function create($data){
        $record = Payment::create($data);
        return $record;
    }

    function remove($id){
        $record = Payment::query()->find($id);
        $record->delete();
        return $record;
    }


}
