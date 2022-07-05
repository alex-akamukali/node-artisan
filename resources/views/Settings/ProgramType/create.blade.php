<form action="{{ route('program-type.store') }}" method="post" enctype="multipart/form-data">
@csrf 
<div class="modal fade in" id="modal-create" aria-hidden="false">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
        <h4 class="modal-title">
          <span slot="title">Add Program Type</span>
        </h4>
      </div>
      <form class="form-horizontal" method="post">
         <div class="modal-body">
           <div class="row">
             <div class="col-md-12" slot="content">                
                <div class="col-md-12">
        <label class="control-label">Id
          <b style="color:red">*</b>
        </label>
        <input class="form-control" name="id" placeholder="Id" />
       </div>

<div class="col-md-12">
        <label class="control-label">Title
          <b style="color:red">*</b>
        </label>
        <input class="form-control" name="title" placeholder="Title" />
       </div>

<div class="col-md-12">
        <label class="control-label">Description
          <b style="color:red">*</b>
        </label>
        <input class="form-control" name="description" placeholder="Description" />
       </div>

<div class="col-md-12">
        <label class="control-label">Status
          <b style="color:red">*</b>
        </label>
        <input class="form-control" name="status" placeholder="Status" />
       </div>

<div class="col-md-12">
        <label class="control-label">Created At
          <b style="color:red">*</b>
        </label>
        <input class="form-control" name="created_at" placeholder="Created At" />
       </div>

<div class="col-md-12">
        <label class="control-label">Updated At
          <b style="color:red">*</b>
        </label>
        <input class="form-control" name="updated_at" placeholder="Updated At" />
       </div>
                
                </div>
            </div>
        </div>
        
        <div class="modal-footer">
          <button type="button" class="btn btn-default pull-left" data-dismiss="modal">Close</button>

          <button type="submit" class="btn btn-primary">
            <i class="fa fa-save"></i> &nbsp; Create
          </button>
        
        </div>
    </form>
    
    </div>
    
 </div>

</div>
</form>