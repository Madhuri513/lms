import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminheadComponent } from './adminhead.component';
import { AdduserComponent } from './adduser/adduser.component';
import { BorrowComponent } from './borrow/borrow.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdminheadComponent,  
    AdduserComponent, 
    BorrowComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports:[
    AdminheadComponent,  
    AdduserComponent, 
    BorrowComponent
  ]
})
export class AdminheadModule { }
