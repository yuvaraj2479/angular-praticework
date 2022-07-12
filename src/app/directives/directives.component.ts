import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  template: `

  <!-- structural directrives -->
  <!--ngswitch-->
  <div *ngFor="let x of colors">
    <h1>{{x}}</h1>
  </div>

  <!--ngswitch index-->
  <div *ngFor="let x of colors; index as i">
    <h1>{{i}} {{x}}</h1>
  </div>
  
  <!--ngswitch array binding-->
  <div *ngFor="let x of colors; first as f">
    <h1>{{f}} {{x}}</h1>
  </div>

  <div *ngFor="let x of colors; last as l">
    <h1>{{l}} {{x}}</h1>
  </div>

  <div *ngFor="let x of colors; odd as o">
    <h1>{{o}} {{x}}</h1>
  </div>

  <div *ngFor="let x of colors; even as e">
    <h1>{{e}} {{x}}</h1>
  </div>

  <!-- ngswitch -->
  <div [ngSwitch]="bike">
     <div *ngSwitchCase="'yamah'">bike is yamaha</div>
     <div *ngSwitchCase="'hero'">bike is hero</div>
     <div *ngSwitchDefault="'honda'">bike is honda</div>
  </div>

  <!-- ngif -->
  <div *ngIf="displayname; then thenblock; else elseblock;"></div>


  <ng-template #thenblock>
   <div>yuvaraj</div>
  </ng-template >

  <ng-template #elseblock>
<div>harikrishnan</div>
  </ng-template>
  `

})
export class DirectivesComponent {
  colors = ["green", "yellow", "blue", "orange"]

  bike = "yamaha"

  displayname = false

}
