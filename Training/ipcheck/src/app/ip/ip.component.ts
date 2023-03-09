import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-iplookup',
  templateUrl: './ip.component.html',
  styleUrls: ['./ip.component.scss']
})
export class IplookupComponent {

  constructor(private http:HttpClient) {
    
  }
  ipAddress!:string;
  ipInfo:any;

  getIp(){
    this.http.get(`https://ipapi.co/${this.ipAddress}/json/`)
    .subscribe((data)=>{
      this.ipInfo = data;
      console.log(this.ipInfo.city,this.ipInfo.region);
    })
  }
}


