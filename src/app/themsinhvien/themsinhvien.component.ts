import { Component, OnInit } from '@angular/core';
import {StudentList} from './students';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-themsinhvien',
  templateUrl: './themsinhvien.component.html',
  styleUrls: ['./themsinhvien.component.css']
})
export class ThemsinhvienComponent implements OnInit {
  students : StudentList[] = [
    {
      id: 1,
      name: 'Phan Hữu Luân',
      dayofbirth: new Date(2000, 3, 30),
      mark: 9,
      classification: 'Giỏi',
    },
    {
      id: 1,
      name: "Phan Hữu Luân",
      dayofbirth: new Date(2000, 3, 30),
      mark: 9,
      classification: 'Giỏi',
    },
    {
      id: 1,
      name: "Phan Hữu Luân",
      dayofbirth: new Date(2000, 3, 30),
      mark: 9,
      classification: 'Giỏi',
    },
]
  addStudent : any;
  student: any;
  show = false;
  constructor() { }

  ngOnInit() {
  }
  Sua(student: StudentList) {
    this.show = true;
    this.addStudent = {
      id: student.id,
      name: student.name,
      dayofbirth: new Date (student.dayofbirth),
      mark: student.mark,
    }
  }
  them() {
    this.addStudent.id = this.students.length + 1;
    this.students.push(Object.assign(this.addStudent));
    this.students = this.students;
    this.addStudent = {
      id: 0,
      name: '',
      dayofbirth: new Date(2000, 3, 30),
      mark: 0,
      classification: "Gioi",
    }
  }

}
