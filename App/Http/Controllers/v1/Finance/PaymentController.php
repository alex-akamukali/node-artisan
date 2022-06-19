<?php
namespace App\Http\Controllers\v1\Finance;
use App\Services\Finance\PaymentService;
use App\Http\Requests\Finance\Payment\StoreRequest;
use App\Http\Requests\Finance\Payment\UpdateRequest;
use App\Http\Controllers\Controller;
//use Illuminate\Http\Request;

class PaymentController extends Controller
{
    //
    private $paymentService = null;

    function __construct(PaymentService $paymentService){
        $this->paymentService = $paymentService;
    }

    function index(){
        $list = $this->paymentService->fetch(request()->all())->get();
        return inertia()->render("v2/Finance/Payment/Index",[
            "list"=>$list
        ]);
    }

    function create(){
        return inertia()->render("v2/Finance/Payment/Create",[
           
        ]);        
    }

    function edit($id){
        $data = $this->paymentService->fetchById($id);
        return inertia()->render("v2/Finance/Payment/Edit",[
            "data"=>$data
        ]);
    }

    function show($id){
        $data = $this->paymentService->fetchById($id);
        return inertia()->render("v2/Finance/Payment/Show",[
            "data"=>$data
        ]);
    }

    function store(StoreRequest $request){
      $new = $this->paymentService->create($request->validated());
      
      return redirect()->back()->with([
            'message' => 'New Record Added Successfully',
            'error'   => false,
            'data'    => $new
      ]);
    }

    function update($id,UpdateRequest $updateRequest){
        $record = $this->paymentService->update($id,$updateRequest->validated());
        return redirect()->back()->with([
            'message' => 'Record updated successfully',
            'error'   => false,
            'data'    => $record
        ]);
    }

    function destroy($id){
      $removed = $this->paymentService->remove($id);
        return redirect()->back()->with([
            'message' => 'Record removed successfully',
            'error'   => false,
            'data'    => $data
        ]);      
    }

}
