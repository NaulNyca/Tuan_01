import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  url='./assets/db/films.json';
  infoFilm:any;
  listFilms: any
  constructor (private http:HttpClient) {}
  ngOnInit() {
    this.getAllFilm().subscribe (data=>{
    this.infoFilm=data;
    this.listFilms=this.infoFilm.results;
    })
  }
  getAllFilm () {
    return this.http.get(this.url);
  }
}
