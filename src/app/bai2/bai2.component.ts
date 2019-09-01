import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai2',
  templateUrl: './bai2.component.html',
  styleUrls: ['./bai2.component.css']
})
export class Bai2Component implements OnInit {
  ThongTinSV = [
    {
      "ImgSrc":"pngtree-3d-man-answered-the-phone-png-image_396400.jpg",
      "FullName":"Nguyễn Văn Tèo",
      "DateOfBirth":"20-01-1999",
      "Sex":"Nam",
      "Point":8.5
    },
    {
      "ImgSrc":"kisspng-yandere-simulator-image-user-deviantart-rival-chan-downloade-by-xdonotenterx-on-deviantart-5b69cdbfd311c9.8055772815336606078646.jpg",
      "FullName":"Phan Thị Nở",
      "DateOfBirth":"20-12-1999",
      "Sex":"Nữ",
      "Point":8.5
    },
    {
      "ImgSrc":"kisspng-ross-valory-yandere-simulator-photography-tv-trope-5b28f714241e52.521863001529411348148.jpg",
      "FullName":"Nguyễn Khá Bảnh",
      "DateOfBirth":"20-01-2000",
      "Sex":"Nam",
      "Point":8.5
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
