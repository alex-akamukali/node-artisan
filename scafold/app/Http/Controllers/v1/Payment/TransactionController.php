<?php
namespace App\Http\Controllers\v1\Payment;
use App\Services\Payment\TransactionService;
use App\Http\Requests\Payment\Transaction\StoreRequest;
use App\Http\Requests\Payment\Transaction\UpdateRequest;
use App\Http\Controllers\Controller;
//use Illuminate\Http\Request;

class TransactionController extends Controller
{
    //
    private $transactionService = null;

    function __construct(TransactionService $transactionService){
        $this->transactionService = $transactionService;
    }

    function index(){
        $list = $this->transactionService->fetch(request()->all())->get();
        return inertia()->render("v2/Payment/Transaction/Index",[
            "list"=>$list
        ]);
    }

    function create(){
        return inertia()->render("v2/Payment/Transaction/Create",[
           
        ]);        
    }

    function edit($id){
        $data = $this->transactionService->fetchById($id);
        return inertia()->render("v2/Payment/Transaction/Edit",[
            "data"=>$data
        ]);
    }

    function show($id){
        $data = $this->transactionService->fetchById($id);
        return inertia()->render("v2/Payment/Transaction/Show",[
            "data"=>$data
        ]);
    }

    function store(StoreRequest $request){
      $new = $this->transactionService->create($request->validated());
      
      return redirect()->back()->with([
            'message' => 'New Record Added Successfully',
            'error'   => false,
            'data'    => $new
      ]);
    }

    function update($id,UpdateRequest $updateRequest){
        $record = $this->transactionService->update($id,$updateRequest->validated());
        return redirect()->back()->with([
            'message' => 'Record updated successfully',
            'error'   => false,
            'data'    => $record
        ]);
    }

    function destroy($id){
      $removed = $this->transactionService->remove($id);
        return redirect()->back()->with([
            'message' => 'Record removed successfully',
            'error'   => false,
            'data'    => $data
        ]);      
    }

}
