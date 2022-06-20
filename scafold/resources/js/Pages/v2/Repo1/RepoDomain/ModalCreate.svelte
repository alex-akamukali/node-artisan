<script context="module">
    import {
        Modal,
    } from "nodejs-svelte-crud-helper";
</script>
<script>

  export let createForm;
  export let create;

</script>


<Modal id="modal-create" on:submit={create}>
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
    bind:value={$createForm.fid}
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
    bind:value={$createForm.fileURL}
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
    bind:value={$createForm.fileName}
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
    bind:value={$createForm.userid}
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
    bind:value={$createForm.bid_id}
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
    bind:value={$createForm.isActive}
/>

</div> 

        

    </div>

    <button type="submit" class="btn btn-primary" slot="storeButton">
        <i class="fa fa-save" /> &nbsp; Create Repo Domain
    </button>
</Modal>
