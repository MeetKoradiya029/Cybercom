import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'e-commerce';
  currentBeverage = 'coffie'
  beverages : string[] =['tea','coffee','miklshake'];
  
  addBeverage(newBeverage:string){
    this.beverages.push(newBeverage);
  }
}
