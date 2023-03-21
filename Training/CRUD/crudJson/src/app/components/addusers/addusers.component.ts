import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute ,Router} from '@angular/router';
import { map } from 'rxjs/operators';
import { UserModel } from 'src/app/Models/user-model';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-addusers',
  templateUrl: './addusers.component.html',
  styleUrls: ['./addusers.component.css']
})
export class AddusersComponent {
  loginForm!: FormGroup;
  userId!:any;

  ngOnInit() {
    this.initializeForm();
    this.route.paramMap.subscribe((params)=>{
      this.userId = params.get('id')
    });
    console.log("id",this.userId);
    if(this.userId){
      this.getUserDetails();
    }
  }
  constructor(private userService:UserService,private route:ActivatedRoute, private router:Router){
   
    
  }

/*form initilize*/
  initializeForm(){
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  submit() {
    let formData = this.loginForm?.getRawValue();

    let email = formData.email;
    let emailRegex = '^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$';
    let password = formData.password;
    let flag = true;

    if (!email || !email.match(emailRegex)) {
      alert('invalid email or password');
      return (flag = false);
    } else if (password.length < 8) {
      alert('invalid email or password');
      return (flag = false);
    }

    if (flag == true) {
      console.log('FormData : ', formData);
    }

   

    const body: UserModel={
      email:this.loginForm?.getRawValue().email,
      password:this.loginForm?.getRawValue().password
    }

    if(this.userId){
      this.userService.updateUser(this.userId,body).subscribe((res)=>{
        if(res){
          console.log("Updated",res);
          this.router.navigate(['/users'])
        }
      })
    }else{
      this.userService.postUser(body).subscribe((res: any)=>{
        console.log("response:",res);
        if(res){
          this.router.navigate(['/users'])
        }
      })
    }
    

    return flag;
  }

  
  getUserDetails(){
    this.userService.getUserDetails(this.userId.toString()).subscribe((res)=>{
      if(res){
        console.log("User Details",res);
        
      }

      const response = res;

      this.loginForm.setValue({
        email:response.email||"",
        password:response.password||""
      })
    })
  }

  // if(this.userId){

  // }

 


  



}
