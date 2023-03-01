import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  arr= [
    {name:"xyz",
     age:20
    },
    {name:"mmk",
     age:20
    },
  ];
   username:string ='';
name!:string;

flag=false;
  onClick(){
    this.flag = true
  }

  public task = '';
  //public cate = '';
  //public fullTask = '';
  public taskArr= [{
    task : "",
    category :""
  }];
  


store(v1:string,v2:string){
 
 
 this.taskArr.push({
  task : v1,
  category : v2
 });
 console.log(this.taskArr);
};
}
