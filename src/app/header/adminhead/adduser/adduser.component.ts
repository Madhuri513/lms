import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { customvalidators } from '../../adminreg/validators';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  adduser;

  constructor(private router: Router,private formBuild:FormBuilder) { }

  ngOnInit() {
    this.adduser = this.formBuild.group({
      username: ['',[Validators.required,Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      fname: ['', [Validators.required, Validators.minLength(4)]],
      lname: ['', [Validators.required, Validators.minLength(4)]],
      matric: ['', [Validators.required, Validators.nullValidator]],
    }
   )
  }
  save(){
    console.log(this.adduser.value);
    let admindata=JSON.stringify(this.adduser.value);
    localStorage.setItem(this.adduser.value.fname,admindata);
    this.router.navigate(['/addbooks']);
  }
  
}
