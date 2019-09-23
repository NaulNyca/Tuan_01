import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-chitiet',
  templateUrl: './chitiet.component.html',
  styleUrls: ['./chitiet.component.css']
})
export class ChitietComponent implements OnInit {

  ds:any;
  dID;
  products = [
    {
      id:1,
      imgScr:"assets/images/products/1031.jpg",
      name:"Nokia A150",
      price:"$900000",
      ncc:"Nokia",
      cl:"Điện thoại di động",
      macl:1,
      sl:5,
      gg:0.05
    },
    {
      id:2,
      imgScr:"assets/images/products/1033.jpg",
      name:"Nokia 940",
      price:"$1200000",
      ncc:"Nokia",
      cl:"Điện thoại di động",
      macl:1,
      sl:20,
      gg:0.1
    },
    {
      id:3,
      imgScr:"assets/images/products/1060.jpg",
      name:"Sony 310",
      price:"$1500000",
      ncc:"Sony",
      cl:"Điện thoại di động",
      macl:1,
      sl:3,
      gg:0.2
    },
    {
      id:4,
      imgScr:"assets/images/products/1072.jpg",
      name:"LG 1200",
      price:"$500000",
      ncc:"LG",
      cl:"Điện thoại di động",
      macl:1,
      sl:15,
      gg:0.5
    },
    {
      id:5,
      imgScr:"assets/images/products/1061.jpg",
      name:"Dell 5600",
      price:"$5000000",
      ncc:"Dell",
      cl:"Máy tính xách tay",
      macl:2,
      sl:5,
      gg:0.2
    },
    {
      id:6,
      imgScr:"assets/images/products/1006.jpg",
      name:"Asus A510",
      price:"$7000000",
      ncc:"Asus",
      cl:"Máy tính xách tay",
      macl:2,
      sl:20,
      gg:0.3
    },
    {
      id:7,
      imgScr:"assets/images/products/1058.jpg",
      name:"Acer 4562",
      price:"$9000000",
      ncc:"Acer",
      cl:"Máy tính xách tay",
      macl:2,
      sl:9,
      gg:0.5
    },
    {
      id:8,
      imgScr:"assets/images/products/1003.jpg",
      name:"Dell 7800",
      price:"$12000000",
      ncc:"Dell",
      cl:"Máy tính xách tay",
      macl:2,
      sl:2,
      gg:0.1
    }
  ]
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(para=>{
      this.dID=+para.get('id');
    });
    this.ds = this.products.find(a=>a.id===this.dID);
  }
}
