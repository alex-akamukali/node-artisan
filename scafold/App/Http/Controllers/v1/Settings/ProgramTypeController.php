<?php
namespace App\Http\Controllers\v1\Settings;
use App\Services\Settings\ProgramTypeService;
use App\Http\Requests\Settings\ProgramType\StoreRequest;
use App\Http\Requests\Settings\ProgramType\UpdateRequest;
use App\Http\Controllers\Controller;
//use Illuminate\Http\Request;

class ProgramTypeController extends Controller
{
    //
    private $programTypeService = null;

    function __construct(ProgramTypeService $programTypeService){
        $this->programTypeService = $programTypeService;
    }

    function index(){
        $list = $this->programTypeService->fetch(request()->all())->get();
        return view("Settings.ProgramType.index",[
            "list"=>$list
        ]);
    }

    function create(){
        return view("Settings.ProgramType.create",[
           
        ]);        
    }

    function edit($id){
        $data = $this->programTypeService->fetchById($id);
        return view("",[
            "data"=>$data
        ]);
    }

    function show($id){
        $data = $this->programTypeService->fetchById($id);
        return view("",[
            "data"=>$data
        ]);
    }

    function store(StoreRequest $request){
      $new = $this->programTypeService->create($request->validated());
      
      return redirect()->back()->with([
            'message' => 'New Record Added Successfully',
            'error'   => false,
            'data'    => $new
      ]);
    }

    function update($id,UpdateRequest $updateRequest){
        $record = $this->programTypeService->update($id,$updateRequest->validated());
        return redirect()->back()->with([
            'message' => 'Record updated successfully',
            'error'   => false,
            'data'    => $record
        ]);
    }

    function destroy($id){
      $removed = $this->programTypeService->remove($id);
        return redirect()->back()->with([
            'message' => 'Record removed successfully',
            'error'   => false,
            'data'    => $data
        ]);      
    }

}
