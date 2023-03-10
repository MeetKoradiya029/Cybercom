import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  courses:any=[
    {
      imgUrl:'https://cyberhoot.com/wp-content/uploads/2020/07/Free-Courses-to-learn-JavaScript.jpg',
      title:'The Complete JavaScript(ES6) Course',
      creator:"Dr. Angla Yu",
      rating:4.7,
      price:449,
    },
    {
      imgUrl:'https://www.educative.io/v2api/editorpage/5765104277651456/image/5194598537232384',
      title:'The Complete TypeScript Course',
      creator:"Codevolution",
      rating:4.6,
      price:449,
    },
    {
      imgUrl:'https://itsg-global.com/wp-content/uploads/2016/09/react-js-to-use-or-not-to-use.png',
      title:'The Complete ReactJs Course',
      creator:"Dr. Angla Yu",
      rating:4.5,
      price:549,
    },
    {
      imgUrl:'https://imagekit.io/blog/content/images/2020/06/angular-logo.png',
      title:'The Complete Angular Course',
      creator:"Maximilian Schwarzmuller",
      rating:4.6,
      price:449,
    },
  ];

  getCourse(){
    return this.courses;
  }
}
