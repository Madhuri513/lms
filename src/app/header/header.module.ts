import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { RouterModule } from '@angular/router';
import { UserregComponent } from './userreg/userreg.component';
import { AdminregComponent } from './adminreg/adminreg.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [HomeComponent, AboutComponent, AdminComponent, UserComponent, UserregComponent, AdminregComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports:[
    HomeComponent,
    AboutComponent,
    AdminComponent,
    UserComponent
  ]
})
export class HeaderModule {
 
 }
