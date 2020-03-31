import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-newbooks',
  templateUrl: './newbooks.component.html',
  styleUrls: ['./newbooks.component.css']
})
export class NewbooksComponent implements OnInit {
data;
  constructor(private http:HttpClient) { 
    this.readJson();
  }

  ngOnInit() {
  }
  readJson(){
    this.http.get('assets/books.json').subscribe((books)=>{
      this.data=books;
    })
  }
}
