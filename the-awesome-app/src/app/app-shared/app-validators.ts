import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AbstractControl, AsyncValidatorFn, ValidationErrors, ValidatorFn } from "@angular/forms";
import { Observable, map } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AppValidators {

    constructor(private httpClient: HttpClient) {
        console.log("AppValidators", httpClient);
    }
    // <input class="form-control" type="number" formControlName="mobile"/>
    static mobileValidator(control: AbstractControl): ValidationErrors | null {

        const value = control.value;
        if (value) {

            //regular expression
            const rule = /[0-9]{10}/;
            const isValid = rule.test(value);
            return isValid ? null : { mob: "invalid" }

        }
        else {
            return null;
        }
    }

    static forbiddenValidator(forbiddenValues: string[]): ValidatorFn {

        return (control: AbstractControl): ValidationErrors | null => {

            const value = control.value;
            if (value) {
                const index = forbiddenValues.findIndex(item => item === value);
                if (index === -1) {
                    return null;
                }
                else {
                    return { forbidden: "invalid" }
                }
            }

            return null;
        }

    }


    checkUniqueness(): AsyncValidatorFn {
        return (control: AbstractControl)
            : Observable<ValidationErrors | null> => {


            const value = control.value;
            // if(value){
            const url = "http://localhost:9000/checkname/" + value;
            return this.httpClient
                .get<{ unique: boolean }>(url)
                .pipe(
                    map(result => result.unique ?
                        null : { uniqueName: "invalid" })
                );
            //  }
            // return null;
        }
    }



}
