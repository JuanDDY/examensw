import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './Course.component';
import { CourseListComponent } from './CourseList/CourseList.component';

import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

//import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [CourseComponent],
  imports: [
    BrowserModule,
    //CourseListComponent,
    HttpClientModule,
    CommonModule
  ],
  exports: [CourseComponent],
  providers: [],
  bootstrap: [CourseComponent]
})
export class CourseModule { }
