import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
import { NewbooksComponent } from './newbooks/newbooks.component';
import { RouterModule } from '@angular/router';
import { SubjecttoreplaceComponent } from './subjecttoreplace/subjecttoreplace.component';
import { OldbooksComponent } from './oldbooks/oldbooks.component';
import { LostbooksComponent } from './lostbooks/lostbooks.component';
import { AddbooksComponent } from './addbooks/addbooks.component';
import { DamagebooksComponent } from './damagebooks/damagebooks.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddbooksComponent,
    BooksComponent,
    SubjecttoreplaceComponent, 
    OldbooksComponent,
    NewbooksComponent, 
    LostbooksComponent, 
    DamagebooksComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports:[
    AddbooksComponent,
    SubjecttoreplaceComponent, 
    OldbooksComponent,
    NewbooksComponent, 
    LostbooksComponent,
    DamagebooksComponent
  ]
})
export class BooksModule { }
