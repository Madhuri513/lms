import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder } from '@angular/forms';
import { customvalidators } from './validators';



@Component({
  selector: 'app-adminreg',
  templateUrl: './adminreg.component.html',
  styleUrls: ['./adminreg.component.css']
})
export class AdminregComponent implements OnInit {

  adminreg;

  constructor(private router: Router,private formBuild:FormBuilder) { }

  ngOnInit() {
    this.adminreg = this.formBuild.group({
      fname: ['', [Validators.required]],
      lname: ['', [Validators.required]],
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
  //   if (this.adminreg.invalid) {
  //     return;
  //   }
  // }
  save(){
    console.log(this.adminreg.value);
    let admindata=JSON.stringify(this.adminreg.value);
    localStorage.setItem(this.adminreg.value.fname,admindata);
    this.router.navigate(['/admin']);
  }
  // onReset(){
  //   this.userreg.reset();
  // }
}

