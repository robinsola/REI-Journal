import { Component } from '@angular/core';
import { Story } from './models/story.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'REI CO-OP Journal';
  masterStoryList: Story[] = [
    new Story('What does it take to set a fastest known time?', 'Liz Thomas', 'April 27, 2018', 'full-length article here', 5),
    new Story('5 of the coolest mountain-town mayors', 'Joe Cutts', 'April 26, 2018', 'full-length article here', 5),
    new Story('Tommy Caldwell talks public lands, his new film and parenting', 'Aer Parris', 'April 19, 2018', 'full-length article here', 5)
  ];

}
