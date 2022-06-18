import { useForm } from "@inertiajs/inertia-svelte";
import {get} from "svelte/store";

let resource = 'transaction-controller';
export function setResource(rsc){
 resource = rsc;
}

export let updateForm = useForm({
	"bidrec_id": "",
	"bid_id": "",
	"SUI": "",
	"IamJV": "",
	"LegalName": "",
	"TECHNATIONProfileLink": "",
	"PBN": "",
	"Address": "",
	"AppLaw": "",
	"ContactName": "",
	"ContactPhone": "",
	"ContactEmail": "",
	"userid": "",
	"SetAsideBusinessType": "",
	"Under_Rep1": "",
	"Under_Rep2": "",
	"Under_Rep3": "",
	"Under_Rep4": "",
	"Under_Rep5": "",
	"Under_Rep6": "",
	"IndigenousBus": "",
	"IndigenousBusStaffS": "",
	"IntegrityBusinessType": "",
	"DirectorNamesString": "",
	"OwnerNamesString": "",
	"Pension": "",
	"LumpSum": "",
	"HDone": "",
	"HOften": "",
	"HLong": "",
	"HDone1": "",
	"HOften1": "",
	"HLong1": "",
	"userresp": "",
	"wkdays": "",
	"nresource": "",
	"fperdiem": "",
	"Solicitationnum": "",
	"P1Price": "",
	"P2Price": "",
	"P3Price": "",
	"P41Price": "",
	"P42Price": "",
	"biddername": "",
	"webinar": "",
	"webinar_reason": "",
	"webinar_session": "",
	"clickbox": "",
	"MaxStage": "",
	"LastLogin": "",
	"Signature": "",
	"CurrentStage": "",
	"HighestStage": ""
});

export let createForm = useForm({
	"bidrec_id": "",
	"bid_id": "",
	"SUI": "",
	"IamJV": "",
	"LegalName": "",
	"TECHNATIONProfileLink": "",
	"PBN": "",
	"Address": "",
	"AppLaw": "",
	"ContactName": "",
	"ContactPhone": "",
	"ContactEmail": "",
	"userid": "",
	"SetAsideBusinessType": "",
	"Under_Rep1": "",
	"Under_Rep2": "",
	"Under_Rep3": "",
	"Under_Rep4": "",
	"Under_Rep5": "",
	"Under_Rep6": "",
	"IndigenousBus": "",
	"IndigenousBusStaffS": "",
	"IntegrityBusinessType": "",
	"DirectorNamesString": "",
	"OwnerNamesString": "",
	"Pension": "",
	"LumpSum": "",
	"HDone": "",
	"HOften": "",
	"HLong": "",
	"HDone1": "",
	"HOften1": "",
	"HLong1": "",
	"userresp": "",
	"wkdays": "",
	"nresource": "",
	"fperdiem": "",
	"Solicitationnum": "",
	"P1Price": "",
	"P2Price": "",
	"P3Price": "",
	"P41Price": "",
	"P42Price": "",
	"biddername": "",
	"webinar": "",
	"webinar_reason": "",
	"webinar_session": "",
	"clickbox": "",
	"MaxStage": "",
	"LastLogin": "",
	"Signature": "",
	"CurrentStage": "",
	"HighestStage": ""
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
