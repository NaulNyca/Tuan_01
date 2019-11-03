import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-guitarshop',
  templateUrl: './guitarshop.component.html',
  styleUrls: ['./guitarshop.component.css']
})
export class GuitarshopComponent implements OnInit {
  url='./assets/db/guitar.json';
  infoGuitar:any;
  listGuitar: any;
  constructor (private http:HttpClient) {}
  ngOnInit() {
    this.getAll().subscribe (data=>{
    this.infoGuitar=data;
    this.listGuitar=this.infoGuitar;
    })
  }
  getAll () {
    return this.http.get(this.url);
  }
}