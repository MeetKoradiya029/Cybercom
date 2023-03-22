import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  // emailForm!:FormGroup;
  // constructor(){
  //   this.emailForm = new FormGroup({
  //     emails:new FormArray([new FormControl("",Validators.email)])
  //   })
  // }
  // get emails(){
  //   return this.emailForm.controls['emails'] as FormArray
  // }
  // addEmail(){
  //   const emails = this.emailForm.get("emails") as FormArray ;
  //   emails.push(new FormControl("",Validators.email))
  // }

  // remove(index:any){
  //   const emails = this.emailForm.get('emails') as FormArray;
  //   emails.removeAt(index)
  // }

  // onSubmit(){
  //   console.log(this.emailForm.value);
    
  // }


// --------------------------Example02-----------------------------------------

  // qualificationForm: FormGroup;

  // constructor(private fb: FormBuilder) {
  //   this.qualificationForm = this.fb.group({
  //     qualifications: this.fb.array([])
  //   });
  // }

  // get qualifications() {
  //   return this.qualificationForm.get('qualifications') as FormArray;
  // }

  // addQualification() {
  //   this.qualifications.push(this.fb.group({
  //     degree: [''],
  //     institution: ['']
  //   }));
  // }
  
  // removeQualification(index: number) {
  //   this.qualifications.removeAt(index);
  // }

// ----------------------------------------------Example03-----------------------------------------------

  skillForm!:FormGroup;

  constructor(private fb:FormBuilder){
    this.skillForm = this.fb.group({
      skills:this.fb.array([this.createSkillsForm()])
    })
  }
  ngOnInit() {
    
  }

  createSkillsForm():FormGroup{
    return this.fb.group({
      name:new FormControl('',Validators.required),
      experience:new FormControl('',Validators.required)
    })
  }

  get skills():FormArray{

    let arr = this.skillForm.controls['skills'] as FormArray
    console.log("formArr",arr);
    
    return arr
    
  }
  
  addSkill(){
    this.skills.push(this.createSkillsForm());
  }

  removeSkill(index:number){
    this.skills.removeAt(index)
  }

}
