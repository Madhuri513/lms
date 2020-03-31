import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  constructor(private router:Router,private formBuild:FormBuilder) { }
  adminlog;
  error=false;

  ngOnInit() {
    this.adminlog = this.formBuild.group({
      username: ['', [Validators.required]],
      password: ['',[Validators.required]]
    })
  }
  button(){
    console.log(this.adminlog.value);
    let name=localStorage.getItem(this.adminlog.value.username);
    console.log(name);
    if(name!=null){
      let obj=JSON.parse(name);
      console.log(obj.fname===this.adminlog.value.username && obj.inputPassword===this.adminlog.value.password);
      if(obj.fname===this.adminlog.value.username && obj.inputPassword===this.adminlog.value.password){
        sessionStorage.setItem('name',obj.username);
        this.router.navigate(['/addbooks']);
      }
      else{
        this.error=true;
      }
    }
    else{
      this.error=true;
    }
  }
  // onSubmit(){
  //   // if(this.adminlog.username!=null && this.adminlog.inputpassword!=null){
  //   //   this.router.navigateByUrl('adminreg');   
  //   // }
  //   // else{
  //   //   console.error('invalid username or password');
  //   // }
  // }
  // // adminLogin(user){
  // //   if(user.uname!=null && user.password!=null){
  // //     this.router.navigate(['adminreg']);   
  // //   }
  // //   else{
  // //     console.error('invalid username or password');
  // //   }
  // // }
}
