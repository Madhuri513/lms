import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder } from '@angular/forms';
import { customvalidators } from './validators';


@Component({
  selector: 'app-userreg',
  templateUrl: './userreg.component.html',
  styleUrls: ['./userreg.component.css']
})
export class UserregComponent implements OnInit {
  userreg;

  constructor(private router: Router,private formBuild:FormBuilder) { }

  ngOnInit() {
    this.userreg = this.formBuild.group({
      fname: ['', [Validators.required]],
      lname: ['', [Validators.required]],
      rollno: ['', [Validators.required]],
      email: ['', [Validators.required]],
      inputPassword: ['', [Validators.required, Validators.minLength(5)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(5)]],
      contact: ['', [Validators.required, Validators.maxLength(10)]]
    }, 
    {validators:customvalidators}
      // validator: MustMatch('password', 'confirmPassword')
    )
  }
  // onSubmit() {
  //   // if (this.userreg.invalid) {
  //   //   return;
  //   // }
  // }
  save(){
    console.log(this.userreg.value);
    let userdata=JSON.stringify(this.userreg.value);
    localStorage.setItem(this.userreg.value.rollno,userdata);
    this.router.navigate(['/user']);
  }
  // onReset(){
  //   this.userreg.reset();
  // }
}
