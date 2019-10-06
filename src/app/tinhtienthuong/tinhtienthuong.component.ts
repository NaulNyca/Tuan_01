import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tinhtienthuong',
  templateUrl: './tinhtienthuong.component.html',
  styleUrls: ['./tinhtienthuong.component.css']
})
export class TinhtienthuongComponent implements OnInit {
  employee = {
    name:null,
    salary:null,
    gender:'Nam',
    rate:null
  }
  list =[
    {
      age:'Dưới 25 tuổi',
      rate:0.07
    },
    {
      age:'Từ 25 đến 40 tuổi',
      rate:0.1
    },
    {
      age:'Trên 40 tuổi',
      rate:0.15
    }
  ]
  constructor() { }

  ngOnInit() {
  }

  TienThuong () {
    let s=this.employee.salary*this.employee.rate;
    if(this.employee.gender=='Nu')
      s=s+200000;
    return s;
  }
}