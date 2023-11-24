import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './CourseList.component';

@NgModule({
  imports: [
    CommonModule
  ],
  //standalone: true,
  declarations: [CourseListComponent],
  exports : [CourseListComponent]
})
export class CourseListModule { }
