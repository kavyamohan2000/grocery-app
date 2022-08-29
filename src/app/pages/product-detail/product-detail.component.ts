import { Component, OnInit } from '@angular/core';
import {CatService}  from 'src/app/services/cat.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
   product:any;
   id:any;
  constructor(private catService:CatService,private activatedRoute:ActivatedRoute) {
   this.id=this.activatedRoute.snapshot.paramMap.get('id');

    this.catService.getProductById(this.id).subscribe((response:any)=>
    {this.product=response.data;})
   }

  ngOnInit(): void {
  }

}
