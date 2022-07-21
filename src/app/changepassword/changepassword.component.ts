import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { FormControl, FormGroup, Validators, } from '@angular/forms';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  constructor(private api: ServiceService) { }


  registerForm!: FormGroup
  registerdata!:any
 
  ngOnInit(): void {
    this.registerForm = new FormGroup({
      oldpassword: new FormControl(''),
      password: new FormControl(''),
      confirmPassword: new FormControl('')
    })
  }

  // get validate(){
  //   return this.registerForm.controls;
  // }

//   getdata(registerdata:any){
//     return this.registerdata=registerdata.id
//  }




registeruser(){
    console.log(this.registerForm.value)
    this.registerdata=localStorage.getItem('id')
    this.api.updateregister(this.registerForm.value.password,this.registerdata)
    .subscribe({
      next:(res=>{
      alert("update succesfully")
      this.registerForm.reset()
    
      
    }),
    error:((err=>{
      alert("error updated")
    }))
  })
  }
  
  

}
