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
import { FormsModule } from '@angular/forms';

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
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
