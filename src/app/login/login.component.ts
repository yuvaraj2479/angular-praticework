import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { FormControl, FormGroup, Validators, } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private api: ServiceService) { }

  ngOnInit(): void {
  }

  loginuser(value: any) {

    this.api.loginuser()
      .subscribe({
        next: ((res) => {
          const user = res.find((a: any) => {
            console.log(a.username)
            console.log(a.password)
            localStorage.setItem('id', a.id)
            localStorage.setItem('oldpassword', a.password)
            localStorage.setItem('username', a.username)
            localStorage.setItem('email', a.email)
            return a.username === value.username && a.password === value.password
          })
          if (user) {
            this.router.navigate(['/first'])
          } else {
            alert("register not found")
          }
        }),
        error: ((error) => {
          alert(error.statusText)
          console.log(error)
        })

      })
  }
}
