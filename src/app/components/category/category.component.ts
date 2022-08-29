import { Component, OnInit } from '@angular/core';
import {CatService} from 'src/app/services/cat.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories:any;
  constructor(private catService:CatService,private router:Router) { 
     this.catService.getcategory().subscribe((data:any)=>
     {this.categories=data.data;})
  }
  
  ngOnInit(): void {
  }
  OnClickHandler(category:any){
    this.router.navigate(['product',category.catId])
  }

}
