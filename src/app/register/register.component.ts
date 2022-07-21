import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, } from '@angular/forms';
import { ServiceService } from '../service.service';
import { registermodel } from './registermodel';
import { CustomValidators } from './Customvalidators';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private api: ServiceService) { }
  registerForm!: FormGroup
  registerdata!:any
  adddata!:boolean
  updatedata!:boolean
  //modeldata: registermodel = new registermodel()

  ngOnInit(): void {
    this.adddata=true
    this.updatedata=false

    this.registerForm = new FormGroup({
      username: new FormControl('',[Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required,Validators.pattern('^[0-9]+$')]),
      confirmPassword: new FormControl('',[Validators.required])
    },
    [CustomValidators.MatchValidator('password', 'confirmPassword')]
    )
    this.getAlluser()
    
  }


  get validate(){
    return this.registerForm.controls;
  }


  get passwordMatchError() {
    return (
      this.registerForm.getError('mismatch') &&
      this.registerForm.get('confirmPassword')?.touched
    );
  }
  

  


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

  edititem(registerdata:any){
    this.adddata=false
    this.updatedata=true

    this.registerForm.controls['username'].setValue(registerdata.username)
    this.registerForm.controls['email'].setValue(registerdata.email)
    this.registerForm.controls['password'].setValue(registerdata.password)
    this.registerForm.controls['confirmPassword'].setValue(registerdata.confirmPassword)
  }

  getdata(registerdata:any){
     return this.registerdata=registerdata.id
  }

  updateitem(){
    this.api.updateregister(this.registerForm.value,this.registerdata)
    .subscribe({
      next:(res=>{
      alert("update succesfully")
      this.registerForm.reset()
      this.getAlluser()
      this.adddata=true
      this.updatedata=false
    }),
    error:((err=>{
      alert("error updated")
    }))
  })
  }

}
