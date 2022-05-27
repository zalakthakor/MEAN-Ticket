import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TicketComponent} from './header/ticket/ticket.component';
import {HomeComponent} from './home/home.component'
import {SigninComponent} from './header/signin/signin.component';
import {SignupComponent} from './header/signup/signup.component';
const routes: Routes = [
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'ticket', component: TicketComponent},
  {path:'signup', component:SignupComponent},
  {path:'signin', component:SigninComponent}
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
