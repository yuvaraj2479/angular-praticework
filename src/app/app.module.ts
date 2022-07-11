import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EventsComponent } from './app/events/events.component';
import { Eventsthumbnail } from './app/events/event-thumbnails.component';


@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    Eventsthumbnail
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
