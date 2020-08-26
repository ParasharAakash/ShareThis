import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './home/signin/signin.component';
import { HomeComponent } from './home/home.component';
import {AdminComponent} from './admin/admin.component';
import {UserComponent} from './user/user.component';
import {ShareComponent} from './user/share/share.component';
import {AboutusComponent} from './user/aboutus/aboutus.component';
import {ContactusComponent} from './user/contactus/contactus.component';
import { FileSComponent } from './file-s/file-s.component';
const routes: Routes = [
  { path:'', component:HomeComponent } ,
  { path:'signin', component:SigninComponent }, 
  { path:'admin', component:AdminComponent }, 
  { path:'user', component:UserComponent }, 
  { path:'aboutus', component:AboutusComponent },
  { path:'contactus', component:ContactusComponent } ,
  { path:'share', component:ShareComponent }, 
  { path:'file', component:FileSComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [SigninComponent,HomeComponent];