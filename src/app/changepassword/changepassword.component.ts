import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { FormControl, FormGroup, Validators, } from '@angular/forms';
import { parse } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  constructor(private api: ServiceService) { }


  registerForm!: FormGroup
  registerdata!:any
  confirmcheck!:any
  checkval!:boolean
  test!:any
  greaterThanValue!:any
  lessThanValue!:any
  // displaymsg!:any
  // oldvalcheck!:boolean
  // lessThan!:any
 
  ngOnInit(): void {
    this.registerForm = new FormGroup({
      oldpassword: new FormControl(''),
      password: new FormControl(''),
      confirmPassword: new FormControl('')
    })
    this.checkval=false
  }

 
  public onChange(event: any): void {
    this.checkval=false
    if (this.lessThanValue!==this.greaterThanValue) {
      this.checkval=true
      this.confirmcheck="confirm password does not match"
    }else{
      this.checkval=false
    }
}


// oldpasswordcheck(){
//   if(this.lessThan!==localStorage.getItem('oldpassword')){
//     this.oldvalcheck=true
//     this.displaymsg="does not match "

//   }
// }



 
 changepassword(){
  console.log(this.registerForm)
    this.api.getallregister()
    .subscribe({
      next:(res:any)=>{
        const user=res.find((a:any)=>{
           return this.registerForm.value.oldpassword===localStorage.getItem('oldpassword') && a.username===localStorage.getItem('username')
        });

        if(user){
          
          if(this.registerForm.value.password===this.registerForm.value.confirmPassword){
            this.checkval=false
            this.registerdata=new FormGroup({
            username: new FormControl(localStorage.getItem('username')),
            email:new FormControl(localStorage.getItem('email')),
            password:new FormControl(this.registerForm.value.password),
            confirmpassword:new FormControl(this.registerForm.value.confirmPassword)
          })
           var id:any=localStorage.getItem('id')
           this.api.updateregister(this.registerdata.value,id)
           .subscribe({
            next:((res)=>{
            alert('change password succesfully')

            }),
            error:(err)=>{

            }

           })
        }
      }
      },
      error:()=>{
        alert("get request failed")
      }
    })
  }






  
  

}
