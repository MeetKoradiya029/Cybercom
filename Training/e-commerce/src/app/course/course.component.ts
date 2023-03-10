import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit{

  data:any=[];
  constructor(private courseService :CourseService){

  }
  ngOnInit(): void {
    this.data=this.courseService.getCourse();
  }
  
}
