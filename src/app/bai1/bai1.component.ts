import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai1',
  templateUrl: './bai1.component.html',
  styleUrls: ['./bai1.component.css']
})
export class Bai1Component implements OnInit {
  ThongTinSV = {
    "ImgID":"pngtree-3d-man-answered-the-phone-png-image_396400.jpg",
    "Name":"Nguyễn Văn Tèo",
    "DateOfBirth":"20-01-1999",
    "Sex":"Nam",
    "Point":8.5
  }
  constructor() { }

  ngOnInit() {
  }

}
