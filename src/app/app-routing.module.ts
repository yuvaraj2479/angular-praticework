import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PipesComponent } from './pipes/pipes.component';
import { DirectivesComponent } from './directives/directives.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';

  
const routes: Routes = [
  { path: 'first', component: PipesComponent },
  {path:'second',component:    DirectivesComponent},
  { path: 'login', component: LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'changepassword',component:ChangepasswordComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PipesComponent },
 
];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
export const routingcomponents=[PipesComponent]