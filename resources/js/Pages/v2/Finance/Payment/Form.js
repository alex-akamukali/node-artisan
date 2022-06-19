import { useForm } from "@inertiajs/inertia-svelte";
import {get} from "svelte/store";

let resource = 'payment/';
export function setResource(rsc){
 resource = rsc;
}

export let updateForm = useForm({
	"bidid": "",
	"Title": "",
	"Description": "",
	"ClosingDateNTime": "",
	"NoteOnTime": "",
	"Location": "",
	"SocioEconomicCriteria": "",
	"Evaluation": "",
	"Terms": "",
	"SecurityInfo": "",
	"Comment": "",
	"ContactInfo": "",
	"EstContractValue": "",
	"isActive": ""
});

export let createForm = useForm({
	"bidid": "",
	"Title": "",
	"Description": "",
	"ClosingDateNTime": "",
	"NoteOnTime": "",
	"Location": "",
	"SocioEconomicCriteria": "",
	"Evaluation": "",
	"Terms": "",
	"SecurityInfo": "",
	"Comment": "",
	"ContactInfo": "",
	"EstContractValue": "",
	"isActive": ""
});


export let selectRow = (data)=>{
    updateForm.update((old)=>({...old,...data}));
};


export function update(){
    get(updateForm).put(resource + get(updateForm).id);
}

export function create(){
   get(createForm).post(resource);
}

export function remove(data){
   get(createForm).delete(resource + data.id);
}

export function reset(){
    get(createForm).reset();
}
