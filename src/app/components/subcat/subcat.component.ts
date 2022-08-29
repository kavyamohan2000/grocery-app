import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { CatService } from 'src/app/services/cat.service';

@Component({
  selector: 'app-subcat',
  templateUrl: './subcat.component.html',
  styleUrls: ['./subcat.component.css']
})
export class SubcatComponent implements OnInit {
  sub:any[]=[];
  catId:any;
  constructor(private catService:CatService,private activatedRoute:ActivatedRoute,private router:Router) { 
    this.catId=this.activatedRoute.snapshot.paramMap.get('catId');
    this.catService.getSubcategoryByCatid(this.catId).subscribe((response:any)=>
    {this.sub=response.data;})
  }

  ngOnInit(): void {
  }
  OnClickHandle(subcat:any){
    this.router.navigate(['product/sub',subcat.subId])
  }
}
