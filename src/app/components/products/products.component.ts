import { Component,AfterViewInit,ViewChild ,OnInit } from '@angular/core';
import {CatService} from 'src/app/services/cat.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  
})
export class ProductsComponent implements OnInit {
  products:any[]=[];
  
  catId:any;
  subId:any;
  constructor(private catService:CatService,private activatedRoute:ActivatedRoute) {
    this.catId=this.activatedRoute.snapshot.paramMap.get('catId');
     
    this.subId=this.activatedRoute.snapshot.paramMap.get('subId');

    this.catService.getProductByCatid(this.catId).subscribe((response:any)=>
    {this.products=response.data;})

    
   }

  ngOnInit(): void {
  }

}
