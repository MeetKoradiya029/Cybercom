import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  constructor(private dataService:DataService){}
  data="this data is coming  from footer"
  sendData(){
    this.dataService.setData(this.data);
  }

}
