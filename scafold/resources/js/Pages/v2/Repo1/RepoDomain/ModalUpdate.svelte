<script context="module">
    import {
        Modal,
    } from "nodejs-svelte-crud-helper";
</script>
<script>

  export let updateForm;
  export let update;

</script>


<Modal id="modal-update" on:submit={update}>
    <span slot="title">Repo Domain</span>

    <div class="col-md-12" slot="content">

<!-- content here  -->

  
        <div class="col-md-12">
<!-- svelte-ignore a11y-label-has-associated-control -->
<label class="control-label"
    >Fid <b style="color:red">*</b></label
>
<input
    type="text"
    class="form-control"
    placeholder=""
    required=""
    bind:value={$updateForm.fid}
/>

</div> 

        
        <div class="col-md-12">
<!-- svelte-ignore a11y-label-has-associated-control -->
<label class="control-label"
    >File U R L <b style="color:red">*</b></label
>
<input
    type="text"
    class="form-control"
    placeholder=""
    required=""
    bind:value={$updateForm.fileURL}
/>

</div> 

        
        <div class="col-md-12">
<!-- svelte-ignore a11y-label-has-associated-control -->
<label class="control-label"
    >File Name <b style="color:red">*</b></label
>
<input
    type="text"
    class="form-control"
    placeholder=""
    required=""
    bind:value={$updateForm.fileName}
/>

</div> 

        
        <div class="col-md-12">
<!-- svelte-ignore a11y-label-has-associated-control -->
<label class="control-label"
    >Userid <b style="color:red">*</b></label
>
<input
    type="text"
    class="form-control"
    placeholder=""
    required=""
    bind:value={$updateForm.userid}
/>

</div> 

        
        <div class="col-md-12">
<!-- svelte-ignore a11y-label-has-associated-control -->
<label class="control-label"
    >Bid Id <b style="color:red">*</b></label
>
<input
    type="text"
    class="form-control"
    placeholder=""
    required=""
    bind:value={$updateForm.bid_id}
/>

</div> 

        
        <div class="col-md-12">
<!-- svelte-ignore a11y-label-has-associated-control -->
<label class="control-label"
    >Is Active <b style="color:red">*</b></label
>
<input
    type="text"
    class="form-control"
    placeholder=""
    required=""
    bind:value={$updateForm.isActive}
/>

</div> 

        

    </div>

    <button type="submit" class="btn btn-primary" slot="storeButton">
        <i class="fa fa-save" /> &nbsp; Update Repo Domain
    </button>
</Modal>
