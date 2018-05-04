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

// the below sub-story lists will somehow need photos and teaser-text
  newsStoryList: Story[] = [
    new Story('Explore How We gave back in 2017', 'REI Staff', 'May 4, 2018', 'full-length article here', 3),
    new Story('Wild Ideas Worth Living', 'Shelby Stanger', 'May 2, 2018', 'full-length article here', 4),
    new Story('The Big Sur marathon is the most stunning costal run on Earth', 'Megan Michelson', 'April 30, 2018', 'full-length article here', 4),
  ];

  gearStoryList: Story[] = [
    new Story('Everything you need for your first backpacking trip', 'Aer Parris', 'April 23, 2018', 'full-length article here', 4),
    new Story('The best rain jackets of 2018', 'Aer Parris', 'April 16, 2018', 'full-length article here', 4),
    new Story('What does moisture-wicking mean?', 'Ken Knapp', 'April 13, 2018', 'full-length article here', 2),
  ];

  skillsStoryList: Story[] = [
    new Story('How much does it cost to hike the Pacific Crest Trail', 'Ken Knapp', 'May 1, 2018', 'full-length article here', 4),
    new Story('How to ship a bike', 'REI Staff', 'April 3, 2018', 'full-length article here', 2),
    new Story('How to have a more eco-friendly camping trip', 'Aer Parris', 'March 27, 2018', 'full-length article here', 4),
  ];

  }
