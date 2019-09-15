import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { parseLazyRoute } from '@angular/compiler/src/aot/lazy_routes';
import { CardService } from '../card.service';
@Component({
  selector: 'app-leaf-rake', 
  templateUrl: './leaf-rake.component.html',
  styleUrls: ['./leaf-rake.component.css']
})
export class LeafRakeComponent implements OnInit {
  pId;
  products: any;
  pageTitle = "";
  ListProduct = [
    {
        "productId": 1,
        "productName": "Leaf Rake",
        "productCode": "GDN-0011",
        "releaseDate": "March 19, 2016",
        "description": "Leaf rake with 48-inch wooden handle.",
        "price": 19.95,
        "starRating": 3.2,
        "imageUrl": "img_1.png"
    },
    {
        "productId": 2,
        "productName": "Garden Cart",
        "productCode": "GDN-0023",
        "releaseDate": "March 18, 2016",
        "description": "15 gallon capacity rolling garden cart",
        "price": 32.99,
        "starRating": 4.2,
        "imageUrl": "img_1.png"
    },
    {
        "productId": 5,
        "productName": "Hammer",
        "productCode": "TBX-0048",
        "releaseDate": "May 21, 2016",
        "description": "Curved claw steel hammer",
        "price": 8.9,
        "starRating": 4.8,
        "imageUrl": "img_1.png"
    },
    {
        "productId": 8,
        "productName": "Saw",
        "productCode": "TBX-0022",
        "releaseDate": "May 15, 2016",
        "description": "15-inch steel blade hand saw",
        "price": 11.55,
        "starRating": 3.7,
        "imageUrl": "img_1.png"
    },
    {
        "productId": 10,
        "productName": "Video Game Controller",
        "productCode": "GMG-0042",
        "releaseDate": "October 15, 2015",
        "description": "Standard two-button video game controller",
        "price": 35.95,
        "starRating": 4.6,
        "imageUrl": "img_1.png"
    },
]
  constructor(private route:ActivatedRoute, private card: CardService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(para=>{
      this.pId=+para.get('productId');
    });
    this.products = this.ListProduct.find(a=>a.productId===this.pId);
    this.pageTitle=this.products.productName;
  }
  addtocard() {
    this.card.addToCart(this.products);
  }

}
