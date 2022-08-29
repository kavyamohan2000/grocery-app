import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthserviceService } from 'src/app/services/authservice.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private auth:AuthserviceService,private router:Router) { }

  ngOnInit(): void {
  }
  onClick(){
    this.auth.logout();
    this.router.navigateByUrl('login');
  }
}
