import { Component, OnInit } from '@angular/core';
import {ExService} from '../ex.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  buyer: any;
  constructor(private ex: ExService) { }

  ngOnInit() {
    this.buyer = this.ex.getItems();
  }

}
