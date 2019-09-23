import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trangchu',
  templateUrl: './trangchu.component.html',
  styleUrls: ['./trangchu.component.css']
})
export class TrangchuComponent implements OnInit {
  chungloai = [
    {
      macl:1,
      cl:'1. Điện thoại di động'
    },
    {
      macl:2,
      cl:'2. Máy tính xách tay'
    },
    {
      macl:3,
      cl:'3. Máy tính để bàn'
    },
    {
      macl:4,
      cl:'4. Quạt máy'
    },
    {
      macl:5,
      cl:'5. Tivi'
    },
    {
      macl:6,
      cl:'6. Tủ lạnh'
    },
  ]
 
  constructor() { }

  ngOnInit() {
  }

}
