import { Component } from '@angular/core';
import { Story } from './models/story.model';
import { Comment } from './models/comment.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'REI Co-op Journal';
}
