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
    <span slot="title">First Interview</span>

    <div class="col-md-12" slot="content">

<!-- content here  -->

  
        <div class="col-md-12">
<!-- svelte-ignore a11y-label-has-associated-control -->
<label class="control-label"
    >Bidid <b style="color:red">*</b></label
>
<input
    type="text"
    class="form-control"
    placeholder=""
    required=""
    bind:value={$createForm.bidid}
/>

</div> 

        
        <div class="col-md-12">
<!-- svelte-ignore a11y-label-has-associated-control -->
<label class="control-label"
    >Title <b style="color:red">*</b></label
>
<input
    type="text"
    class="form-control"
    placeholder=""
    required=""
    bind:value={$createForm.Title}
/>

</div> 

        
        <div class="col-md-12">
<!-- svelte-ignore a11y-label-has-associated-control -->
<label class="control-label"
    >Description <b style="color:red">*</b></label
>
<input
    type="text"
    class="form-control"
    placeholder=""
    required=""
    bind:value={$createForm.Description}
/>

</div> 

        
        <div class="col-md-12">
<!-- svelte-ignore a11y-label-has-associated-control -->
<label class="control-label"
    >Closing Date N Time <b style="color:red">*</b></label
>
<input
    type="text"
    class="form-control"
    placeholder=""
    required=""
    bind:value={$createForm.ClosingDateNTime}
/>

</div> 

        
        <div class="col-md-12">
<!-- svelte-ignore a11y-label-has-associated-control -->
<label class="control-label"
    >Note On Time <b style="color:red">*</b></label
>
<input
    type="text"
    class="form-control"
    placeholder=""
    required=""
    bind:value={$createForm.NoteOnTime}
/>

</div> 

        
        <div class="col-md-12">
<!-- svelte-ignore a11y-label-has-associated-control -->
<label class="control-label"
    >Location <b style="color:red">*</b></label
>
<input
    type="text"
    class="form-control"
    placeholder=""
    required=""
    bind:value={$createForm.Location}
/>

</div> 

        
        <div class="col-md-12">
<!-- svelte-ignore a11y-label-has-associated-control -->
<label class="control-label"
    >Socio Economic Criteria <b style="color:red">*</b></label
>
<input
    type="text"
    class="form-control"
    placeholder=""
    required=""
    bind:value={$createForm.SocioEconomicCriteria}
/>

</div> 

        
        <div class="col-md-12">
<!-- svelte-ignore a11y-label-has-associated-control -->
<label class="control-label"
    >Evaluation <b style="color:red">*</b></label
>
<input
    type="text"
    class="form-control"
    placeholder=""
    required=""
    bind:value={$createForm.Evaluation}
/>

</div> 

        
        <div class="col-md-12">
<!-- svelte-ignore a11y-label-has-associated-control -->
<label class="control-label"
    >Terms <b style="color:red">*</b></label
>
<input
    type="text"
    class="form-control"
    placeholder=""
    required=""
    bind:value={$createForm.Terms}
/>

</div> 

        
        <div class="col-md-12">
<!-- svelte-ignore a11y-label-has-associated-control -->
<label class="control-label"
    >Security Info <b style="color:red">*</b></label
>
<input
    type="text"
    class="form-control"
    placeholder=""
    required=""
    bind:value={$createForm.SecurityInfo}
/>

</div> 

        
        <div class="col-md-12">
<!-- svelte-ignore a11y-label-has-associated-control -->
<label class="control-label"
    >Comment <b style="color:red">*</b></label
>
<input
    type="text"
    class="form-control"
    placeholder=""
    required=""
    bind:value={$createForm.Comment}
/>

</div> 

        
        <div class="col-md-12">
<!-- svelte-ignore a11y-label-has-associated-control -->
<label class="control-label"
    >Contact Info <b style="color:red">*</b></label
>
<input
    type="text"
    class="form-control"
    placeholder=""
    required=""
    bind:value={$createForm.ContactInfo}
/>

</div> 

        
        <div class="col-md-12">
<!-- svelte-ignore a11y-label-has-associated-control -->
<label class="control-label"
    >Est Contract Value <b style="color:red">*</b></label
>
<input
    type="text"
    class="form-control"
    placeholder=""
    required=""
    bind:value={$createForm.EstContractValue}
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
        <i class="fa fa-save" /> &nbsp; Create First Interview
    </button>
</Modal>
