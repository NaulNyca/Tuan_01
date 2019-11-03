import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  film:any;
  constructor(private route: ActivatedRoute, private http:HttpClient) {}

    ngOnInit () {
    const url = this.route.snapshot.paramMap.get('url');
    this.getFilmbyId(url).subscribe(data=>{
    this.film=data;
    })
  }
  getFilmbyId(url : string) {
    return this.http.get(url);
  }
}