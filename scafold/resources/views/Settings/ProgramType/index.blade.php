@extends('layouts.master')
@section('title')
    <title>Program Type</title>
@endsection
@section('styles')

@endsection
@section('header')
    <div class="home_link page-header">
        Program Type
    </div>
@endsection
@section('content')

<div class="row">
  <div class="col-md-12">
   <div class="box box-info">
    <div class="box-header with-border">
     
      <div class="box-tools pull-right">
         <button slot="createButton" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#modal-create">
            <i class="fa fa-plus"></i>
            Add Program Type
         </button>
      </div> 
      
      <div style="clear: both;">&nbsp;</div>
    </div>
    <div class="box-body">
     <div class="table-responsive">
      <div id="example1_wrapper" class="">
        <div class="row">
         <div slot="content">
             
            <div class="col-sm-12">
             <table id="example1" class="table table-data table-striped table-hover dataTable no-footer" role="grid" aria-describedby="example1_info">
              
              <thead>
                <tr role="row">
                    <th>Id</th>
<th>Title</th>
<th>Description</th>
<th>Status</th>
<th>Created At</th>
<th>Updated At</th>
                    <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                @foreach ($list as $index=>$item)
                <tr class="odd">
                   <td>{$item->id}</td>
<td>{$item->title}</td>
<td>{$item->description}</td>
<td>{$item->status}</td>
<td>{$item->created_at}</td>
<td>{$item->updated_at}</td>
                  <td>
                   <a data-toggle="modal" data-target="#modal-edit">
                      <i class="fa fa-edit text-green"></i>
                   </a>
                    &nbsp;&nbsp;
                   <a><i class="fa fa-trash text-red"></i></a>
                  </td> 
                 </tr>  
                @endforeach
                                
                </tbody>
            </table>
        </div>
    </div>
</div>
</div>
</div>
</div>

 <div class="box-footer clearfix"></div>

</div>

</div>
                        
</div>

@endsection
@section('scripts')
    <script>
      (function($){
        $(function(){


        })();
      })(jQuery);
    </script>
@endsection
