import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit{
  principle = 1000000;
  rate=7.2;
  months=120;
  resultEMI=0;

  totalPayable=0;
  totalIntrest=0;
  emiTable:any[]=[];

  ngOnInit(){
    this.calculateEMI()
    
  }


  calculateEMI() {
    const monthlyRate = this.rate / 1200;
    const numerator = this.principle * monthlyRate * Math.pow(1 + monthlyRate, this.months);
    const denominator = Math.pow(1 + monthlyRate, this.months) - 1;
    this.resultEMI = numerator / denominator;
    this.totalPayable = this.resultEMI * this.months;
    this.totalIntrest = this.totalPayable - this.principle;
    this.tableData();

}


tableObj:any= [
]

tableData(){
  let i;
 
  for(i=0;i<this.months;i++){
    let endbelence;
    endbelence = this.principle - this.resultEMI
     let arr;
     let int = this.rate/1200;
     let pri = this.resultEMI - int
     arr = {index:i+1, bb: this.principle ,emi: this.resultEMI,pri:pri, interest:int, end:endbelence }
     this.tableObj.push(arr)
  }
  console.log(this.tableObj);
}


 

}
