<?php

namespace App\Http\Requests\Finance\Payment;

use Illuminate\Foundation\Http\FormRequest;

class StoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            "bidid"=>"required",
"Title"=>"required",
"Description"=>"required",
"ClosingDateNTime"=>"required",
"NoteOnTime"=>"required",
"Location"=>"required",
"SocioEconomicCriteria"=>"required",
"Evaluation"=>"required",
"Terms"=>"required",
"SecurityInfo"=>"required",
"Comment"=>"required",
"ContactInfo"=>"required",
"EstContractValue"=>"required",
"isActive"=>"required"
        ];
    }
}
