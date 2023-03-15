import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent  implements OnInit{

  contactForm!: FormGroup;

  ngOnInit() {
    this.validateForm();
    
      
  }


  validateForm(){
    this.contactForm= new FormGroup({
      name:new FormControl('',[Validators.required,Validators.minLength(3)]),
      email:new FormControl('',[Validators.required,Validators.email]),
      phone:new FormControl('',[Validators.required,Validators.minLength(10)]),
      message:new FormControl('',[Validators.required])
    })
  }
}
