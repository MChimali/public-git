import { getAccounts, insertTransfer } from "./transfer.api";
import { onUpdateField, onSetError, onSetFormErrors, onSubmitForm } from "../../common/helpers";
import { history } from "../../core/router/history";
import { setAccountOptions } from "./transfer.helpers";
import { formValidation, myDateValidator } from "./transfer.validations";

let transfer = { origin:"", iban: "", name:"", amount:"", concept:"", notes:"",  date: new Date, email:"" };

let date = { day:"", month: "", year:"" };

const params = history.getParams();

getAccounts().then(response => setAccountOptions(response, params.id));

const updateDate = (year, day, month) => {
    if(year === "" && day === "" && month === ""){
        transfer.date = new Date;
    }else{
        transfer.date = new Date (year + "-" + day + "-" + month);
        if(transfer.date < new Date){
            transfer.date = new Date;            
        }
    }
};

const dateToString = objectDate => objectDate.day + objectDate.month + objectDate.year;

onUpdateField("iban", event => {
    const value = event.target.value;
    transfer = {
        ...transfer,
        iban: value,
    }    

    formValidation.validateField("iban", transfer.iban).then(result => {
        onSetError("iban", result);
    })
})

onUpdateField("name", event => {
    const value = event.target.value;
    transfer = {
        ...transfer,
        name: value,
    }    
    
    formValidation.validateField("name", transfer.name).then(result => {
        onSetError("name", result);
    })
    
})

onUpdateField("amount", event => {
    const value = event.target.value;
    transfer = {
        ...transfer,
        amount: value,
    }    

    formValidation.validateField("amount", transfer.amount).then(result => {
        onSetError("amount", result);
    })
})

onUpdateField("day", event => {
    const value = event.target.value;
    date = {
        ...date,
        month: value,
    }
    updateDate (date.year, date.day, date.month);    
    onSetError("date", myDateValidator(transfer, dateToString(date)));    
})

onUpdateField("month", event => {
    const value = event.target.value;
    date = {
        ...date,
        day: value,
    }       
    updateDate (date.year, date.day, date.month);     
    onSetError("date", myDateValidator(transfer, dateToString(date)));
})

onUpdateField("year", event => {
    const value = event.target.value;
    date = {
        ...date,
        year: value,
    }       
    updateDate (date.year, date.day, date.month);    
    onSetError("date", myDateValidator(transfer, dateToString(date)));
})

onUpdateField("email", event => {
    const value = event.target.value;
    transfer = {
        ...transfer,
        email: value,
    }    

    formValidation.validateField("email", transfer.email).then(result => {
        onSetError("email", result);
    })
})

onUpdateField("concept", event => {
    const value = event.target.value;
    transfer = {
        ...transfer,
        concept: value
    }

    formValidation.validateField("concept", transfer.name).then(result => {
        onSetError("concept", result);
    })

})

onUpdateField("notes", event => {
    const value = event.target.value;
    transfer = {
        ...transfer,
        notes: value
    }

    formValidation.validateField("notes", transfer.name).then(result => {
        onSetError("notes", result);
    })
})

onSubmitForm ("transfer-button", () => {

    transfer.origin = document.getElementById("select-account").value;         

    formValidation.validateForm(transfer).then(result => {
        onSetFormErrors(result);
        if(result.succeeded){
            console.log(transfer)
            insertTransfer(transfer).then(() => {history.back()})
        }
    })
})

