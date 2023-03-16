import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  principle = 1000000;
  rate = 7.2;
  months = 120;
  resultEMI = 0;

  totalPayable = 0;
  totalIntrest = 0;
  emiTable: any[] = [];
  interestPercentage = 0

  ngOnInit() {
    this.calculateEMI();
  }

  calculateEMI() {
    const monthlyRate = this.rate / 1200;
    const numerator =
      this.principle * monthlyRate * Math.pow(1 + monthlyRate, this.months);
    const denominator = Math.pow(1 + monthlyRate, this.months) - 1;
    this.resultEMI = (numerator / denominator)
    this.totalPayable = this.resultEMI * this.months;
    this.totalIntrest = this.totalPayable - this.principle;
    this.interestPercentage = (this.totalIntrest * 100)/this.totalPayable;

    this.tableData();
  }

  tableData() {
    let tableArr: any[] = [];
    let beginning_bal = this.principle;
    beginning_bal.toFixed(2);
    let emi = this.resultEMI;
    emi.toFixed(2)
    let interestAmount = (this.rate / 1200) * beginning_bal;
    interestAmount.toFixed(2)
    let tablePrinciple = emi - interestAmount;
    tablePrinciple.toFixed(2)
    
    let ending_bal = beginning_bal-tablePrinciple;
    ending_bal.toFixed(2)
    
    
    for (let i = 1; i <this.months+1  ; i++) {
      let tableObj = {
        index:i,
        beg_bal: beginning_bal.toFixed(2),
        emi: emi.toFixed(2),
        principle: tablePrinciple.toFixed(2),
        interest: interestAmount.toFixed(2),
        end_bal: ending_bal.toFixed(2),
      };

      tableArr.push(tableObj);
      beginning_bal = ending_bal;
      interestAmount = (this.rate / 1200) * beginning_bal;
      tablePrinciple = emi - interestAmount;
      ending_bal = beginning_bal - tablePrinciple;
    }

    return tableArr;
  }
}
