import { Component, OnInit } from '@angular/core';
import { OrderserviceService } from '../Services/orderservice/orderservice.service';

@Component({
  selector: 'app-myorder',
  templateUrl: './myorder.component.html',
  styleUrls: ['./myorder.component.scss']
})
export class MyorderComponent implements OnInit {
  orderArray:any;
  noofOrders:any;

  constructor(private orderservice:OrderserviceService) { }

  ngOnInit(): void {
    this.getAllorders();
  }
  getAllorders(){
    this.orderservice.getAllorders().subscribe((response:any)=>{
      console.log(response);
      this.orderArray=response.data;
      this.noofOrders=response.data.length;
      console.log("Order Array :",this.orderArray)
      console.log("Total No of orders :",this.noofOrders)
    })
  }
}
