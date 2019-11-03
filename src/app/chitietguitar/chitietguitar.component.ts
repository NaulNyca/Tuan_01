import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {CardguitarService} from '../cardguitar.service';

@Component({
  selector: 'app-chitietguitar',
  templateUrl: './chitietguitar.component.html',
  styleUrls: ['./chitietguitar.component.css']
})
export class ChitietguitarComponent implements OnInit {
  url='./assets/db/guitar.json';
  infoGuitar:any;
  listGuitar:any;
  product: any;
  id;
  soluong;
  constructor (private http:HttpClient, private route:ActivatedRoute, private card:CardguitarService) {}
  ngOnInit() {
    this.route.paramMap.subscribe(para=>{
      this.id=+para.get('i.id');
    });
    this.getAll().subscribe (data=>{
      this.infoGuitar=data;
      this.listGuitar=this.infoGuitar;
      this.product = this.listGuitar.find(a=>a.id===this.id);
      this.product.giamgia = Math.ceil(Math.random()*50);
      this.product.yourprice = this.product.price - (this.product.price * (this.product.giamgia / 100));
    });
  }
  getAll () {
    return this.http.get(this.url);
  }
  addtocard() {
    if(this.soluong > 0) {
      this.product.soluong = this.soluong;
      this.card.addToCart(this.product);
    }
    else {
      alert('Số lượng phải lớn hơn 0');
    }
  }
}