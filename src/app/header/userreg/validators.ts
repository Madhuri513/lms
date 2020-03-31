import { FormGroup } from "@angular/forms";
export function customvalidators(group:FormGroup){
    let pass =group.value.inputPassword;
    let confirmpass =group.value.confirmPassword;
    if(pass==confirmpass){
        return null;
    } else{
        return {'custom':true}
    }
}