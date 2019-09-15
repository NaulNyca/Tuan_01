import { Component, OnInit } from '@angular/core';
import { CardService } from '../card.service';

@Component({
  selector: 'app-gio',
  templateUrl: './gio.component.html',
  styleUrls: ['./gio.component.css']
})
export class GioComponent implements OnInit {
  Product:any;
  constructor(private card:CardService) { }

  ngOnInit() {
    this.Product = this.card.getItems();
  }

}
