import { Component, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'event-thumb',
  templateUrl: './events.component.html',

})
export class Eventsthumbnail  {
  //communicate child component 
  @Input() event:any

  //communicate parent component
  @Output() eventclick=new EventEmitter()

  handleclick(){
   this.eventclick.emit(this.event.name)
  }
}