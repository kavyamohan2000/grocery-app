import { Component, OnInit } from '@angular/core';
import {CatService} from 'src/app/services/cat.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-subproducts',
  templateUrl: './subproducts.component.html',
  styleUrls: ['./subproducts.component.css']
})
export class SubproductsComponent implements OnInit {
 products:any[]=[];
 subId:any;
  constructor(private catService:CatService,private activatedRoute:ActivatedRoute ) { 
    this.subId=this.activatedRoute.snapshot.paramMap.get('subId');
     
    

    this.catService.getProductBySubId(this.subId).subscribe((response:any)=>
    {this.products=response.data;})


  }

  ngOnInit(): void {
  }

}
