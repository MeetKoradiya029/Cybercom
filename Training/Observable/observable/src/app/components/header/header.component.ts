import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  data:string;
  
  constructor(private dataService:DataService){
    this.dataService.data$.subscribe(value=>{
      this.data=value;
    })
  }

}
