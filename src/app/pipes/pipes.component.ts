import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-pipes',
  template:`
 
<!-- string property type pipes -->
  <!-- lowercase -->
  <h2>{{content | lowercase}}</h2>

  <!-- uppercase -->
  <h2>{{content | uppercase}}</h2>

  <!-- first will be capital -->
  <h2>{{content | titlecase}}</h2>

  <!-- searchimg for position index -->
  <h2>{{content | slice:2}}</h2>
  <h2>{{content | slice:2:9}}</h2>

  <!-- json pippe -->
  <h2>{{jsondata | json}}</h2>

  

<!-- number property type pipes -->
  <!-- digit pipe -->
  <h2>{{5.678|number:'1.2-3'}}</h2>
  <h2>{{5.678|number:'3.5-7'}}</h2>
  <h2>{{5.678|number:'3.1-2'}}</h2>

  <!-- percent pipe -->
  <h2>{{0.25|percent}}</h2>

  <!-- currency -->
  <h2>{{5.678|currency}}</h2>
  <h2>{{5.678|currency:'GBP'}}</h2>
  <h2>{{5.678|currency:'GBP':'code'}}</h2>

  <!-- datepipe -->
  <h2>{{date}}</h2>
  <h2>{{date|date:'short'}}</h2>
  <h2>{{date|date:'shortDate'}}</h2>
  <h2>{{date|date:'shortTime'}}</h2>


  <h1>{{employee}}</h1>
  `,

})
export class PipesComponent implements OnInit {

  content="hey codeevolution"
  jsondata={
    "firstname":"hari",
    "lastname":"yuva"
  }

  employee=[];


  date=new Date()

  constructor(private employeeservice:ServiceService){}

  ngOnInit(): void {
    // this.employeeservice.getEmployee();
  }
}
