import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xeploai',
  templateUrl: './xeploai.component.html',
  styleUrls: ['./xeploai.component.css']
})
export class XeploaiComponent implements OnInit {
  sv = {
    name: null,
    dob: null,
    gender: null,
    point: 0,
    resulft: "Rớt",
  }
  constructor() { }

  ngOnInit() {
  }
  xeploai() {
    if(this.sv.point<5) {
      this.sv.resulft = "Rớt";
      document.getElementById('kq').style.backgroundColor = "red";
      document.getElementById('kq').style.color = "white";
    }
    else {
      this.sv.resulft = "Đậu";
      document.getElementById('kq').style.backgroundColor = "green";
      document.getElementById('kq').style.color = "white";
    }
    return this.sv.resulft;
  }
}
