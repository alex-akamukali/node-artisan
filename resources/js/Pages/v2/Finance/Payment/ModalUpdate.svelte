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
    <span slot="title">Payment</span>

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
    bind:value={$updateForm.bidid}
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
    bind:value={$updateForm.Title}
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
    bind:value={$updateForm.Description}
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
    bind:value={$updateForm.ClosingDateNTime}
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
    bind:value={$updateForm.NoteOnTime}
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
    bind:value={$updateForm.Location}
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
    bind:value={$updateForm.SocioEconomicCriteria}
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
    bind:value={$updateForm.Evaluation}
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
    bind:value={$updateForm.Terms}
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
    bind:value={$updateForm.SecurityInfo}
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
    bind:value={$updateForm.Comment}
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
    bind:value={$updateForm.ContactInfo}
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
    bind:value={$updateForm.EstContractValue}
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
        <i class="fa fa-save" /> &nbsp; Update Payment
    </button>
</Modal>
