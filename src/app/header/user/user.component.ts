import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  constructor(private router: Router, private formBuild: FormBuilder) { }
  userlog;
  error;

  ngOnInit() {
    this.userlog = this.formBuild.group({
      number: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }
  welcome() {
    console.log(this.userlog.value);
    let userNumber = localStorage.getItem(this.userlog.value.number);
    if (userNumber != null) {
      let obj = JSON.parse(userNumber);
      console.log(obj.rollno === this.userlog.value.number && obj.inputPassword === this.userlog.value.password);
      if (obj.rollno === this.userlog.value.number && obj.inputPassword === this.userlog.value.password) {
        sessionStorage.setItem('rollno', obj.number);
        this.router.navigate(['/borrow']);
      }
      else {
        this.error = true;
      }
    }
    else {
      this.error = true;
    }
  }
  // onSubmit(){
  //   // if(this.userlog.number!=null && this.userlog.password!=null){
  //   //   this.router.navigateByUrl('userreg');   
  //   // }
  //   // else{
  //   //   console.error('invalid userNumber or password');
  //   // }
  // }
}
