import { Component } from '@angular/core';
import { UserModel } from 'src/app/Models/user-model';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  users:any=[]

  constructor(private userService:UserService){
    this.userService.getUser().subscribe((res)=>{
      this.users=res;
      console.log(this.users);
      
    })
  }

  delete(id:any){
    this.userService.deleteUser(id).subscribe((res)=>{
      if(res){
        this.users.splice(id-1,1);
        console.log("deleted : ",this.users);
        
      }
    })
  }


}
