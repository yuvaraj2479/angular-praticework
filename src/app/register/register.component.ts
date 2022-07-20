import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';
import { registermodel } from './registermodel';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private api: ServiceService) { }
  registerForm!: FormGroup
  registerdata!:any
  //modeldata: registermodel = new registermodel()

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      username: new FormControl('',[Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required,Validators.pattern('^[0-9]+$')]),
      confirmPassword: new FormControl('', [Validators.required,Validators.pattern('^[0-9]+$')])
    },
    // {
    //   validators:this.Mustmatch('password','confirmPassword')
    // }
    
    )
    this.getAlluser()
  }


  get validate(){
    return this.registerForm.controls;
  }


  // Mustmatch(password: any, confirmPassword: any) {
  //   return (formGroup: FormGroup) => {
  //     const passwordcontrol = formGroup.controls[password];
  //     const confirmPasswordcontrol = formGroup.controls[confirmPassword];

  //     if (confirmPasswordcontrol.errors && !confirmPasswordcontrol.errors['Mustmatch']) {
  //       return;
  //     }

  //     if(passwordcontrol.value!==confirmPasswordcontrol.value){
  //       confirmPasswordcontrol.setErrors({Mustmatch:true});
  //     }else {
  //       confirmPasswordcontrol.setErrors(null);
  //     }
  //   }
  // }

  


  registeruser() {
    // this.modeldata = this.registerForm.value
    // console.log(this.modeldata)
    
    this.api.postregister(this.registerForm.value)
      .subscribe({
        next: (res) => {
          alert("successfull")
          this.registerForm.reset()
          this.getAlluser()
        },
        error: () => {
          alert("failled")
        }
      })
  }


  getAlluser(){
    this.api.getallregister()
    .subscribe({
      next:(res)=>{
        this.registerdata=res;
      },
      error:()=>{
        alert("get request failed")
      }
    })
  }


  deleteitem(registerdata:any){
    this.api.deleteregister(registerdata.id)
    .subscribe({
      next:(res)=>{
        alert("deleted item")
        this.getAlluser()
      },
      error:()=>{
        alert("deleted request failed")
      }
    })
  }
}
