import { AbstractControl, ValidatorFn} from "@angular/forms";
export function avoidWord(fc: AbstractControl): {[errorName :string]:any}|null {
const notAllowed = /hack/.test(fc.value);
// return notAllowed? {prohibited : {value :fc.value}} :null;
if (notAllowed == true) {
return {
prohibited: {
value: fc.value
}
};
} else return null;
}


export function avoidWord1(regexp: RegExp): ValidatorFn {
    return (fc: AbstractControl): { [errorName: string]: any } | null => {
    const notAllowed = regexp.test(fc.value);
    if (notAllowed == true) {
    return {
    prohibited: {
    value: fc.value
    }};
    } else return null;
    };}