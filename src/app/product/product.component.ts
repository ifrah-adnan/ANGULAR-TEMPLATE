import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements  OnInit{
  public products:any
  public keyword:string=""




  constructor() {
  }
  ngOnInit(): void {
    this.products=[
      {"id":1,"name":"computer",price:10000},
      {"id":2,"name":"Smartphone",price:7000},
      {"id":3,"name":"printer",price:2000},
      {"id":4,"name":"mouse",price:70},]
  }

  delete(p:any) {
    this.products.splice(p,1)

  }

  search() {
   this.products=this.products.filter((p:any)=>p.name.includes(this.keyword));
    }



}
