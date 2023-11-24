import { Component, OnInit } from '@angular/core';
import { Course } from './Course';
import { DataCourses } from './DataCourses';

@Component({
  selector: 'app-Course',
  //standalone: true ,
  templateUrl: './Course.component.html',
  styleUrls: ['./Course.component.css']
})
export class CourseComponent implements OnInit {

  cursos: Array<Course> = DataCourses;

  constructor() { }

  getCoursesList(): Array<Course> {
    return DataCourses;
  }

  ngOnInit() {
  }

}
