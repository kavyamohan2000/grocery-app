import { Component, OnInit } from '@angular/core';
import {User} from 'src/app/models/user.model'
import {AuthserviceService} from  'src/app/services/authservice.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userModel=new User();
  constructor(private auth:AuthserviceService) { }

  ngOnInit(): void {
  }
  OnFormSubmit(){
    console.log(this.userModel);
    this.auth.register(this.userModel).subscribe((response)=>{

      console.log(response)

    })

  }
}
