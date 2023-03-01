import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  arr= [
    {name:"xyz",
     age:20
    },
    {name:"mmk",
     age:20
    },
  ];
}
