import { Component, OnInit } from '@angular/core';

import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import {Router} from '@angular/router';
import { AuthserviceService } from 'src/app/services/authservice.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  // loginForm = new FormGroup({
  //   email: new FormControl('abc@gmail.com'),
  //   password: new FormControl('123')
  // })

  loginResponse = ''
  loginClass = ''

  constructor(private fb: FormBuilder, private authService: AuthserviceService,private router:Router) {}

  loginForm = this.fb.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required, Validators.minLength(6)]],
  });

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  ngOnInit(): void {}

  onSubmitHandler() {
    this.authService.login(this.loginForm.value).subscribe(
      (response) => {
        console.log(response);
        this.loginResponse = "login successfully, thank you"
        this.loginClass = 'alert-success'
        localStorage.setItem('token',response.data);
        localStorage.setItem('user',JSON.stringify(response.user));
        this.router.navigateByUrl('home');
      },
      (error) => {
        //console.log(error)
        this.loginResponse = "Wrong username or password, try again"
        this.loginClass = 'alert-danger'
      }
    );
  }
}