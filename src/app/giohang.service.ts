import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GiohangService {
  items = [];addToCart(product) {
    this.items.push(product);
  }
  getItems() {
    return this.items;
  }
  clearCart() {
    this.items = [];
    return this.items;
  }
  
  constructor() { }
}
