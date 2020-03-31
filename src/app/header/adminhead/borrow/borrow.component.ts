import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-borrow',
  templateUrl: './borrow.component.html',
  styleUrls: ['./borrow.component.css']
})
export class BorrowComponent implements OnInit {
borrow;
  data;

  constructor(private router: Router,private http:HttpClient,private formBuild: FormBuilder) { 
    this.readJson();
  }

  ngOnInit() {
    this.borrow = this.formBuild.group({
      selector: ['',[Validators.required]],
      username: ['', [Validators.required, Validators.minLength(4)]],
      date: ['',[Validators.required]]
    });
  }
  readJson(){
    this.http.get('assets/books.json').subscribe((books)=>{
      this.data=books;
    })
  }
}
