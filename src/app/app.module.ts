import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EventsComponent } from './app/events/events.component';
import { Eventsthumbnail } from './app/events/event-thumbnails.component';
import { DirectivesComponent } from './directives/directives.component';
import { ChildcomponentComponent } from './childcomponent/childcomponent.component';
import { ParentcomponentComponent } from './parentcomponent/parentcomponent.component';
import { PipesComponent } from './pipes/pipes.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule} from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import {ButtonModule} from 'primeng/button';
import { ChangepasswordComponent } from './changepassword/changepassword.component';




@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    Eventsthumbnail,
    DirectivesComponent,
    ChildcomponentComponent,
    ParentcomponentComponent,
    PipesComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    ChangepasswordComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
