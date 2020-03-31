import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './header/home/home.component';
import { AboutComponent } from './header/about/about.component';
import { AdminComponent } from './header/admin/admin.component';
import { UserComponent } from './header/user/user.component';
import { AdminregComponent } from './header/adminreg/adminreg.component';
import { UserregComponent } from './header/userreg/userreg.component';
import { AddbooksComponent } from './header/adminhead/books/addbooks/addbooks.component';
import { AdduserComponent } from './header/adminhead/adduser/adduser.component';
import { BooksComponent } from './header/adminhead/books/books.component';
import { LostbooksComponent } from './header/adminhead/books/lostbooks/lostbooks.component';
import { NewbooksComponent } from './header/adminhead/books/newbooks/newbooks.component';
import { OldbooksComponent } from './header/adminhead/books/oldbooks/oldbooks.component';
import { SubjecttoreplaceComponent } from './header/adminhead/books/subjecttoreplace/subjecttoreplace.component';
import { BorrowComponent } from './header/adminhead/borrow/borrow.component';
import { DamagebooksComponent } from './header/adminhead/books/damagebooks/damagebooks.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminheadComponent } from './header/adminhead/adminhead.component';


const routes: Routes = [
  {path:'header',component:HeaderComponent},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'adminhead',component:AdminheadComponent},
  {path:'admin',component:AdminComponent,children:[{path:'adminreg',component:AdminregComponent}]},
  {path:'user',component:UserComponent,children:[{path:'userreg',component:UserregComponent}]},
  {path:'adminreg',component:AdminregComponent},
  {path:'userreg',component:UserregComponent},
  {path:'adduser',component:AdduserComponent},
  {path:'books',component:BooksComponent},
  {path:'addbooks',component:AddbooksComponent},
  {path:'lostbooks',component:LostbooksComponent},
  {path:'newbooks',component:NewbooksComponent},
  {path:'oldbooks',component:OldbooksComponent},
  {path:'damagebooks',component:DamagebooksComponent},
  {path:'subjectforreplace',component:SubjecttoreplaceComponent},
  {path:'borrow',component:BorrowComponent},
  {path:'**',component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
