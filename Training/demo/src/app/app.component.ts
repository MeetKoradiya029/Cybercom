import { Component } from '@angular/core';

interface Task {
  name: string;
  priority: 'low' | 'medium' | 'high';
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'demo';
  arr = [
    { name: 'xyz', age: 20 },
    { name: 'mmk', age: 20 },
  ];
  username: string = '';
  name!: string;

  flag = false;
y: any;
  onClick() {
    this.flag = true;
  }

  //   public task = '';
  //   //public cate = '';
  //   //public fullTask = '';
  //   public taskArr= [{
  //     task : "",
  //     category :""
  //   }];

  // store(v1:string,v2:string){

  //  this.taskArr.push({
  //   task : v1,
  //   category : v2
  //  });
  //  console.log(this.taskArr);
  // };

  task:any = ''

  taskarr:any[] = []
  priorityArr:string[] =[
    'high','medium','low'
  ] 
  getTask(n1: string, n2: string) {
    const newTask = { name: n1, priority: n2 };
if(n1!=''){

  if(n2 == 'high'){
    this.taskarr.unshift(newTask);
  }
    else if(n2 == 'low'){
      this.taskarr.push(newTask);
    }
    else{
      debugger;
      const lastIndex = this.taskarr.reduce((lastIndex, task, index) => {
        if (task.priority === 'high') {
          return index;
        }
        return lastIndex;
      }, -1);
      this.taskarr.splice(lastIndex+1,0,newTask);
      console.log(lastIndex); 
    }
    
  }
}

  delete(index: number) {
    console.log(index)
    this.taskarr.splice(index, 1);
  }


  imgUrl=''

  changeImage(e:KeyboardEvent){
    this.imgUrl = (e.target as HTMLInputElement).value  
  
  }

  logImg(event:string){
    console.log(event);
  }
 


  users = [
    {name:"test",age:25,id:5},
    {name:"test2",age:26,id:9},
    {name:"test3",age:22,id:2}
  ]


}

