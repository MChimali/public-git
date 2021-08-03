import { Validators, createFormValidation } from "@lemoncode/fonk";
import { iban } from "@lemoncode/fonk-iban-validator";
import { positiveNumber } from '@lemoncode/fonk-positive-number-validator';

const validationSchema = {
    field: {        
        iban: [
            {validator: Validators.required, message: "Campo requerido"},
            {validator:iban.validator, message: "IBAN incorrecto"}
        ],
        name:[{validator: Validators.required, message: "Campo requerido"}],
        amount: [
            {validator: Validators.required, message: "Campo requerido"},
            {validator:positiveNumber.validator, message: "Cantidad debe ser superior a cero", customArgs: { allowZero: false }}  
        ], 
        email:[
            {validator: Validators.required, message: "Campo requerido"},
            {validator: Validators.email, message:"Email no válido"}
        ]       
    }
}

const validatorType = 'dateValidator';
export const myDateValidator = (fieldValidatorArgs, string) => {
    const { date } = fieldValidatorArgs;
        const validationResult = {
        succeeded: false,
        type: validatorType,
        message: 'Introduce una fecha futura',
    };    
    if ((date && date > new Date) || string === "") {
    validationResult.succeeded = true;
    validationResult.message = '';
    }
    return validationResult;
}

export const formValidation = createFormValidation(validationSchema);