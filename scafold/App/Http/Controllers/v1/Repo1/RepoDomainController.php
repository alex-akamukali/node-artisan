<?php
namespace App\Http\Controllers\v1\Repo1;
use App\Services\Repo1\RepoDomainService;
use App\Http\Requests\Repo1\RepoDomain\StoreRequest;
use App\Http\Requests\Repo1\RepoDomain\UpdateRequest;
use App\Http\Controllers\Controller;
//use Illuminate\Http\Request;

class RepoDomainController extends Controller
{
    //
    private $repoDomainService = null;

    function __construct(RepoDomainService $repoDomainService){
        $this->repoDomainService = $repoDomainService;
    }

    function index(){
        $list = $this->repoDomainService->fetch(request()->all())->get();
        return inertia()->render("v2/Repo1/RepoDomain/Index",[
            "list"=>$list
        ]);
    }

    function create(){
        return inertia()->render("v2/Repo1/RepoDomain/Create",[
           
        ]);        
    }

    function edit($id){
        $data = $this->repoDomainService->fetchById($id);
        return inertia()->render("v2/Repo1/RepoDomain/Edit",[
            "data"=>$data
        ]);
    }

    function show($id){
        $data = $this->repoDomainService->fetchById($id);
        return inertia()->render("v2/Repo1/RepoDomain/Show",[
            "data"=>$data
        ]);
    }

    function store(StoreRequest $request){
      $new = $this->repoDomainService->create($request->validated());
      
      return redirect()->back()->with([
            'message' => 'New Record Added Successfully',
            'error'   => false,
            'data'    => $new
      ]);
    }

    function update($id,UpdateRequest $updateRequest){
        $record = $this->repoDomainService->update($id,$updateRequest->validated());
        return redirect()->back()->with([
            'message' => 'Record updated successfully',
            'error'   => false,
            'data'    => $record
        ]);
    }

    function destroy($id){
      $removed = $this->repoDomainService->remove($id);
        return redirect()->back()->with([
            'message' => 'Record removed successfully',
            'error'   => false,
            'data'    => $data
        ]);      
    }

}
