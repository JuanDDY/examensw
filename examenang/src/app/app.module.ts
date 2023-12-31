import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';  

import { CourseModule } from './Course/Course.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppComponent,
    BrowserModule,
    AppRoutingModule,
    CourseModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }