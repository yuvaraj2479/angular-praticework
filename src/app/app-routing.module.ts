import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PipesComponent } from './pipes/pipes.component';
import { DirectivesComponent } from './directives/directives.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { AuthgardGuard } from './authgard.guard';

  
const routes: Routes = [
  { path: 'first', component: PipesComponent,canActivate:[AuthgardGuard] },
  {path:'second',component:    DirectivesComponent,canActivate:[AuthgardGuard]},
  { path: 'login', component: LoginComponent},
  {path:'register',component:RegisterComponent,canActivate:[AuthgardGuard]},
  {path:'changepassword',component:ChangepasswordComponent,canActivate:[AuthgardGuard]},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PipesComponent},
 
];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
export const routingcomponents=[PipesComponent]