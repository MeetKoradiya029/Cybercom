import { Component, EventEmitter, Input,Output} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Input('img') postUrl ='';

  @Output('im') imageSeleted = new EventEmitter<string>() // If this not work thenn give alias to decorator
}
