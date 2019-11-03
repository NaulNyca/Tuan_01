import { Component, OnInit } from '@angular/core';
import {CardguitarService} from '../cardguitar.service';
import {ExService} from '../ex.service';

@Component({
  selector: 'app-giohangguitar',
  templateUrl: './giohangguitar.component.html',
  styleUrls: ['./giohangguitar.component.css']
})
export class GiohangguitarComponent implements OnInit {
  product: any;
  totle = 0;
  show = false;
  buyer = {
    "product": this.product,
    "name": null,
    "email": null,
    "number": null,
    "date": new Date(),
    "order": 1,
    "card": 1111,
  };
  constructor(private card:CardguitarService, private ex:ExService) { }

  ngOnInit() {
    this.product = this.card.getItems();
    for(var i = 0; i < this.product.length; i++) {
      this.totle += this.product[i].price * this.product[i].soluong;
    }
    if(this.totle != 0) {
      this.show = true;
    }
    else {
      alert('Chưa có sản phẩm nào trong giỏ hàng');
    }
  }
  Tong(p, s) {
    return p*s;
  }
  addbuyer() {
    if(this.buyer.name != null && this.buyer.email != null && this.buyer.number != null) {
     this.ex.addToCart(this.product);
      this.product = null;
      this.totle = 0;
    }
     else {
       alert('Bạn vui lòng nhập đầy đủ thông tin');
     }
  }
  
}
