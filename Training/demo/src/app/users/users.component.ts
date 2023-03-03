import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{

id=0;
  constructor(private route:ActivatedRoute){


  }

  ngOnInit(): void {
      this.route.params.subscribe(params=>{
        this.id=params['id']
      })
      console.log("id"+this.id);
  }

}
