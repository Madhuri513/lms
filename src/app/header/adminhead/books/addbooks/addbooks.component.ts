import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-addbooks',
  templateUrl: './addbooks.component.html',
  styleUrls: ['./addbooks.component.css']
})
export class AddbooksComponent implements OnInit {
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
