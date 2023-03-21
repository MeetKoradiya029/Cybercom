import { NgModule } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  // form!:FormGroup;
  constructor(private formBuilder:FormBuilder){}

  form = this.formBuilder.group({
    lessions:this.formBuilder.array([])
  })

  get lessions(){
    return this.form.controls['lessions'] as FormArray
  }   

  addLession(){
    let lessionForm = this.formBuilder.group({
      title:["",Validators.required],
      level:['beginner',Validators.required]
    })
    this.lessions

  }
}
