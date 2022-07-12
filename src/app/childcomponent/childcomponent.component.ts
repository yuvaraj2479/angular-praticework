import { Component, EventEmitter, Input, Output, } from '@angular/core';

@Component({
  selector: 'app-childcomponent',
  templateUrl: './childcomponent.component.html',
  
})
export class ChildcomponentComponent {

// parent to child
@Input() parentdata:any;

// child to parent
 @Output() childevent=new EventEmitter();

 handleclick(){
  this.childevent.emit('codeevolution')
 }
  
}
