import { addMovementRows } from "./movements.helpers";
import { getAccounts } from "./movements.api";
import { getAccount } from "../account/account.api"
import { history } from "../../core/router/history";
import { mapAccountList } from "./movements.mapper";

//get the id parameter from the URL 
const params = history.getParams();
const isEditMode = Boolean(params.id);

//we create an empty array that will host the accounts filtered by ID
let filteredList = [];

//function to show in HTML the values of the selected account
const mainAccountDetails = account => {
    document.getElementById("balance").innerHTML = `${account.balance} €`;
    document.getElementById("alias").innerHTML = account.name;
    document.getElementById("iban").innerHTML = account.iban;    
}

//function to filter accounts with a given ID
const filterById = (accounts, id) => accounts.filter(account => account.accountId === id);

//we get the full movement list. If general movement page > show full list. 
//If account movement page > show filtered list and account details
getAccounts().then(response =>{
    if(isEditMode){
        getAccount(params.id).then(selectedAccount => mainAccountDetails(selectedAccount));
        filteredList = (filterById (response, params.id));
        addMovementRows(mapAccountList(filteredList)) 
    }else{
        addMovementRows(mapAccountList(response));
        document.getElementsByClassName("subtitulo_paginas")[0].innerHTML = "";
        document.getElementsByClassName("label")[0].innerHTML = "";
    }
})

 





