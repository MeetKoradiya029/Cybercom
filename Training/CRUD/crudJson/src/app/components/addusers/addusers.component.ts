import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserModel } from 'src/app/Models/user-model';

@Component({
  selector: 'app-addusers',
  templateUrl: './addusers.component.html',
  styleUrls: ['./addusers.component.css']
})
export class AddusersComponent {
  loginForm!: FormGroup;

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  submit() {
    let formData = this.loginForm.getRawValue();

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

    return flag;
  }

   body : UserModel={
    email:this.loginForm.getRawValue().email,
    password:this.loginForm.getRawValue().password
  }
  



}
