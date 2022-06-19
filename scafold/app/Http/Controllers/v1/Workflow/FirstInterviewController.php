<?php
namespace App\Http\Controllers\v1\Workflow;
use App\Services\Workflow\FirstInterviewService;
use App\Http\Requests\Workflow\FirstInterview\StoreRequest;
use App\Http\Requests\Workflow\FirstInterview\UpdateRequest;
use App\Http\Controllers\Controller;
//use Illuminate\Http\Request;

class FirstInterviewController extends Controller
{
    //
    private $firstInterviewService = null;

    function __construct(FirstInterviewService $firstInterviewService){
        $this->firstInterviewService = $firstInterviewService;
    }

    function index(){
        $list = $this->firstInterviewService->fetch(request()->all())->get();
        return inertia()->render("v2/Workflow/FirstInterview/Index",[
            "list"=>$list
        ]);
    }

    function create(){
        return inertia()->render("v2/Workflow/FirstInterview/Create",[
           
        ]);        
    }

    function edit($id){
        $data = $this->firstInterviewService->fetchById($id);
        return inertia()->render("v2/Workflow/FirstInterview/Edit",[
            "data"=>$data
        ]);
    }

    function show($id){
        $data = $this->firstInterviewService->fetchById($id);
        return inertia()->render("v2/Workflow/FirstInterview/Show",[
            "data"=>$data
        ]);
    }

    function store(StoreRequest $request){
      $new = $this->firstInterviewService->create($request->validated());
      
      return redirect()->back()->with([
            'message' => 'New Record Added Successfully',
            'error'   => false,
            'data'    => $new
      ]);
    }

    function update($id,UpdateRequest $updateRequest){
        $record = $this->firstInterviewService->update($id,$updateRequest->validated());
        return redirect()->back()->with([
            'message' => 'Record updated successfully',
            'error'   => false,
            'data'    => $record
        ]);
    }

    function destroy($id){
      $removed = $this->firstInterviewService->remove($id);
        return redirect()->back()->with([
            'message' => 'Record removed successfully',
            'error'   => false,
            'data'    => $data
        ]);      
    }

}
