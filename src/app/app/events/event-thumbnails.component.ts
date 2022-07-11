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
  somevariable:any="new value"

  handleclick(){
   this.eventclick.emit(this.event.name)
  }

  templatefoo(){
    console.log("template variable will be show on")
  }
}