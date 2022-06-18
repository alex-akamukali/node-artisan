<?php
namespace app\Controllers\Http\Payment;
use App\Services\Payment\TransactionService;
//use App\Http\Requests\Payment\CoursePaymentTrack\StoreRequest;
//use App\Http\Requests\Payment\CoursePaymentTrack\UpdateRequest;
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
        return $list;
    }

    function create(){
        
    }

    function edit($id){
        $data = $this->transactionService->fetchById($id);
    }

    function show($id){
        $data = $this->transactionService->fetchById($id);
    }

    function store(StoreRequest $request){
      $new = $this->transactionService->create($request->validated());
      return $new;
    }

    function update($id,UpdateRequest $updateRequest){
        $record = $this->transactionService->update($id,$updateRequest->validated());
        return $record;
    }

    function destroy($id=''){
    //   $record = $this->coursePaymentTrackRepository->remove($id);
      $removed = $this->transactionService->remove();
      return $removed;
    }

}
