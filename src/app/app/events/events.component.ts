import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  template: `<event-thumb (eventclick)="handleeventclick($event)" [event]=event1 ></event-thumb>`,
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  event1={
    id:1,
    name:"raju",
    name1:"arun"
  }

  handleeventclick(data:any){
    console.log('received:',data)
 }

  constructor() { }

  ngOnInit(): void {
   
  }

  
}
