import { Component, OnInit } from '@angular/core';
import {GiohangService} from '../giohang.service'

@Component({
  selector: 'app-giohang',
  templateUrl: './giohang.component.html',
  styleUrls: ['./giohang.component.css']
})
export class GiohangComponent implements OnInit {
  product:any;
  constructor(private gio:GiohangService) { }

  ngOnInit() {
    this.product=this.gio.getItems();
  }

}
